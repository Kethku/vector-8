import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Realm from 'realms-shim';

import { publicAPI } from "./lyonAPI";
import { WebGL } from "../renderer/webgl";
import {AppState} from '../reducers';

export function Game() {
  const animationRequest = useRef<number>();
  const webGLDrawRef = useRef<() => void>();
  const [realm, setRealm] = useState(null);

  const stateRef = useRef<any>();
  const mousePositionRef = useRef<{ x: number, y: number }>();

  const code = useSelector((state: AppState) => state.editor.code);

  useEffect(() => {
    evalCode(code);
  }, [code])

  function evalCode(code: string) {
    const newRealm = Realm.makeRootRealm();
    for (let key in publicAPI) {
      newRealm.global[key] = publicAPI[key];
    }
    newRealm.global.update = (state: any) => state;
    newRealm.global.draw = () => {};

    try {
      newRealm.evaluate(code);
    } catch (error) {
      console.log("eval error: ", error);
    }

    setRealm(newRealm);
  }

  function drawFrame() {
    if (realm) {
      realm.global.mouseX = mousePositionRef.current?.x ?? 0;
      realm.global.mouseY = mousePositionRef.current?.y ?? 0;
      try {
        stateRef.current = realm.global.update(stateRef.current);
        realm.global.draw(stateRef.current);
      } catch (error) {
        console.error(error);
      }
    }
    webGLDrawRef.current && webGLDrawRef.current();
    animationRequest.current = requestAnimationFrame(drawFrame);
  }

  function mouseMoved(x: number, y: number) {
    mousePositionRef.current = { x, y };
  }

  useEffect(() => {
    animationRequest.current = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(animationRequest.current);
  })

  return <WebGL mouseMoved={mouseMoved} drawRef={webGLDrawRef} />;
}
