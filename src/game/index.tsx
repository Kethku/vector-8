import * as React from "react";
import { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deepEqual } from 'fast-equals';
import Realm from 'realms-shim';

import { StateManager } from "./stateManager";
import { publicAPI } from "./lyonAPI";
import { WebGL } from "../renderer/webgl";
import { Node, injectHighlights } from "../rewrite/callHighlighting";
import { injectGlobalGatheringCode } from "../rewrite/gatherGlobals";
import { setRewindAmount, setPaused } from "../mediaControls/actions";
import { AppState } from '../reducers';
import { sfc32, useSelectorRef } from '../utils';

const expectedGlobals = { 
  'update': "(state) => state", 
  'draw': "(state) => {}",
  'initialState': "{}"
};

export function Game() {
  const dispatch = useDispatch();

  const realmRef = useRef<any>();
  const definedGlobalsRef = useRef<any>();
  const mousePositionRef = useRef<{ x: number, y: number }>();
  const [paused, pausedRef] = useSelectorRef((state: AppState) => state.mediaControls.paused);
  const stateManagerRef = useRef<StateManager>(new StateManager(realmRef, definedGlobalsRef, pausedRef, mousePositionRef));
  const [rewindAmount, rewindAmountRef] = useSelectorRef((state: AppState) => { 
    return Math.floor(state.mediaControls.rewindAmount * ((stateManagerRef.current?.frameCount ?? 1) - 1))
  });

  const code = useSelector((state: AppState) => state.editor.code);
  const callUnderMouse = useSelector((state: AppState) => state.editor.callUnderMouse);

  useEffect(() => {
    evalCode(code, callUnderMouse);
  }, [code, callUnderMouse])

  useEffect(() => {
    if (!paused && rewindAmount != 0) {
      stateManagerRef.current.rewind(rewindAmount);
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
    let random = sfc32();

    newRealm.global.random = random;
    newRealm.global.initialState = {};
    newRealm.global.update = (state: any) => state;
    newRealm.global.draw = () => {};

    code = injectHighlights(code, callUnderMouse);
    code = injectGlobalGatheringCode(code, expectedGlobals);

    try {
      let definedGlobals = newRealm.evaluate(code);
      if (!deepEqual(definedGlobals.initialState, realmRef.current?.global?.initialState)) {
        stateManagerRef.current.reset(definedGlobals.initialState);
        dispatch(setPaused(false));
      } 

      definedGlobalsRef.current = definedGlobals;

      if (paused) {
        stateManagerRef.current.recalculateStates();
      }
    } catch (error) {
      console.log("syntax error: ", error);
      console.log("augmented source: ", code);
    }

    realmRef.current = newRealm;
  }

  function mouseEvent(x: number, y: number) {
    mousePositionRef.current = { x, y };
  }

  function onFrame() {
    stateManagerRef.current.tick(rewindAmountRef.current);
  }

  return <WebGL mouseEvent={mouseEvent} onFrame={onFrame} />;
}
