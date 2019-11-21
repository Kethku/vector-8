import * as React from "react";
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Realm from 'realms-shim';
import * as Immutable from 'immutable';

import { publicAPI, updateHighlightFlicker } from "./lyonAPI";
import { WebGL } from "../renderer/webgl";
import { Node, injectHighlights } from "../rewrite/callHighlighting";
import { injectGlobalGatheringCode } from "../rewrite/gatherGlobals";
import { setRewindAmount, setPaused } from "../mediaControls/actions";
import { AppState } from '../reducers';
import { useSelectorRef } from '../utils';

const statesToStore = 100;

const expectedGlobals = { 
  'update': "(state) => state", 
  'draw': "(state) => {}",
  'initialState': "Immutable.Map()"
};

function sfc32(a: number, b: number, c: number, d: number) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}

function objectsDeepEqual(a: any, b: any) {
  if (Immutable.isImmutable(a)) {
    return Immutable.is(a, b);
  } else {
    return JSON.stringify(a) === JSON.stringify(b);
  }
}

function cloneIfNecessary(obj: any) {
  if (Immutable.isImmutable(obj)) return obj;
  return JSON.parse(JSON.stringify(obj));
}

interface StoredState {
  state: any;
  mousePosition?: { x: number, y: number };
}

export function Game() {
  const dispatch = useDispatch();

  const realmRef = useRef<any>();
  const resultingGlobalsRef = useRef<any>();
  const stateQueueRef = useRef<StoredState[]>();
  const mousePositionRef = useRef<{ x: number, y: number }>();

  const [paused, pausedRef] = useSelectorRef((state: AppState) => state.mediaControls.paused);
  const [rewindAmount, rewindAmountRef] = useSelectorRef((state: AppState) => { 
    return Math.floor(state.mediaControls.rewindAmount * ((stateQueueRef.current?.length ?? 1) - 1))
  });

  const code = useSelector((state: AppState) => state.editor.code);
  const callUnderMouse = useSelector((state: AppState) => state.editor.callUnderMouse);

  useEffect(() => {
    evalCode(code, callUnderMouse);
  }, [code, callUnderMouse])

  useEffect(() => {
    if (!paused && rewindAmount != 0) {
      for (let i = 0; i < rewindAmount; i++) {
        stateQueueRef.current.shift();
      }
      dispatch(setRewindAmount(0));
    }
  }, [paused, rewindAmount]);

  function updateState(realm: any, previousState: StoredState) {
    realm.global.mouseX = previousState.mousePosition.x ?? 0;
    realm.global.mouseY = previousState.mousePosition.y ?? 0;
    return cloneIfNecessary(resultingGlobalsRef.current.update(previousState.state))
  }

  function drawState(realm: any, state: StoredState) {
    realm.global.mouseX = state.mousePosition.x ?? 0;
    realm.global.mouseY = state.mousePosition.y ?? 0;
    resultingGlobalsRef.current.draw(state.state);
  }

  function evalCode(code: string, callUnderMouse: Node) {
    console.log(code)
    for (let element of document.getElementsByTagName("iframe") as any) {
      element.parentNode.removeChild(element);
    }
    const newRealm = Realm.makeRootRealm();
    for (let key in publicAPI) {
      newRealm.global[key] = publicAPI[key];
    }
    let random = sfc32(10, 10, 10, 10);

    newRealm.global.random = random;
    newRealm.global.Immutable = Immutable;
    newRealm.global.initialState = Immutable.Map();
    newRealm.global.update = (state: any) => state;
    newRealm.global.draw = () => {};

    code = injectHighlights(code, callUnderMouse);
    code = injectGlobalGatheringCode(code, expectedGlobals);

    try {
      let newGlobals = newRealm.evaluate(code);
      if (!objectsDeepEqual(newGlobals.initialState, resultingGlobalsRef?.current?.initialState)) {
        stateQueueRef.current = [{ state: newGlobals.initialState, mousePosition: mousePositionRef.current }];
        dispatch(setPaused(false));
      } 

      resultingGlobalsRef.current = newGlobals;

      if (paused && stateQueueRef.current.length > 1) {
        let state = stateQueueRef.current[stateQueueRef.current.length - 1];
        let newStates = [state];
        for (let i = stateQueueRef.current.length - 2; i >= 0; i--) {
          state = { state: updateState(newRealm, state), mousePosition: stateQueueRef.current[i]?.mousePosition };
          newStates.unshift(state);
        }
        stateQueueRef.current = newStates;
      }
    } catch (error) {
      console.log("syntax error: ", error);
      console.log("augmented source: ", code);
    }

    realmRef.current = newRealm;
  }

  function onFrame() {
    try {
      if (!pausedRef.current) {
        stateQueueRef.current[0].mousePosition = mousePositionRef.current ?? { x: 0, y: 0 };
        let newState = updateState(realmRef.current, stateQueueRef.current[0]);
        stateQueueRef.current.unshift({ state: newState, mousePosition: stateQueueRef.current[0].mousePosition });
        if (stateQueueRef.current.length > statesToStore) {
          stateQueueRef.current.pop();
        }
      }
      updateHighlightFlicker();
      drawState(realmRef.current, stateQueueRef.current[rewindAmountRef.current]);
    } catch (error) {
      console.error(error);
    }
  }

  function mouseEvent(x: number, y: number) {
    mousePositionRef.current = { x, y };
  }

  return <WebGL mouseEvent={mouseEvent} onFrame={onFrame} />;
}
