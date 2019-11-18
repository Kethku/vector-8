import * as React from "react";
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Realm from 'realms-shim';
import * as Immutable from 'immutable';

import { publicAPI, updateHighlightFlicker } from "./lyonAPI";
import { WebGL } from "../renderer/webgl";
import { Node, injectHighlights } from "../rewrite/callHighlighting";
import { injectGlobalGatheringCode } from "../rewrite/gatherGlobals";
import { setRewindAmount } from "../mediaControls/actions";
import { AppState } from '../reducers';
import { useSelectorRef } from '../utils';

const statesToStore = 600;

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

export function Game() {
  const dispatch = useDispatch();

  const animationRequestRef = useRef<number>();
  const webGLDrawRef = useRef<() => void>();
  const realmRef = useRef<any>();
  const lastFrameRef = useRef<number>();
  const resultingGlobalsRef = useRef<any>();
  const stateQueueRef = useRef<any[]>();
  const mousePositionRef = useRef<{ x: number, y: number }>();

  const [paused, pausedRef] = useSelectorRef((state: AppState) => state.mediaControls.paused);
  const [rewindAmount, rewindAmountRef] = useSelectorRef((state: AppState) => { 
    let amount = Math.floor(state.mediaControls.rewindAmount * ((stateQueueRef.current?.length ?? 1) - 1))
    console.log(amount)
    return amount;
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

  function evalCode(code: string, callUnderMouse: Node) {
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
        stateQueueRef.current = [newGlobals.initialState];
      }
      resultingGlobalsRef.current = newGlobals;
    } catch (error) {
      console.log("syntax error: ", error);
      console.log("augmented source: ", code);
    }

    realmRef.current = newRealm;
  }

  function drawFrame() {
    let realm = realmRef.current;
    let currentTime = Date.now();
    if (realm && (!lastFrameRef.current || (currentTime - lastFrameRef.current > 16.666))) {
      lastFrameRef.current = Date.now();
      realm.global.mouseX = mousePositionRef.current?.x ?? 0;
      realm.global.mouseY = mousePositionRef.current?.y ?? 0;
      try {
        if (!pausedRef.current) {
          let newState = cloneIfNecessary(resultingGlobalsRef.current.update(stateQueueRef.current[0]))
          stateQueueRef.current.unshift(newState);
          if (stateQueueRef.current.length > statesToStore) {
            stateQueueRef.current.pop();
          }
        }
        updateHighlightFlicker();
        resultingGlobalsRef.current.draw(stateQueueRef.current[rewindAmountRef.current]);
      } catch (error) {
        console.error(error);
      }
    }
    webGLDrawRef.current && webGLDrawRef.current();
    animationRequestRef.current = requestAnimationFrame(drawFrame);
  }

  function mouseMoved(x: number, y: number) {
    mousePositionRef.current = { x, y };
  }

  useEffect(() => {
    animationRequestRef.current = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(animationRequestRef.current);
  }, [])

  return <WebGL mouseMoved={mouseMoved} drawRef={webGLDrawRef} />;
}
