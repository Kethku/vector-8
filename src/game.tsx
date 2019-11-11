import * as React from "react";
import { useRef, useEffect, useState } from 'react';
import Realm from 'realms-shim';

import { publicAPI } from "./lyonAPI";
import { WebGL } from "./renderer/webgl";

export interface GameProps { 
  code: string
}

let state: any = null;
let mouseX = 0;
let mouseY = 0;

export function Game({ code }: GameProps) {
  const animationRequest = useRef<number>();
  const [realm, setRealm] = useState(null);
  const webGLDrawRef = useRef<() => void>();

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
      realm.global.mouseX = mouseX;
      realm.global.mouseY = mouseY;
      try {
        state = realm.global.update(state);
        realm.global.draw(state);
      } catch (error) {
        console.error(error);
      }
    }
    webGLDrawRef.current && webGLDrawRef.current();
    animationRequest.current = requestAnimationFrame(drawFrame);
  }

  function mouseMoved(newMouseX: number, newMouseY: number) {
    mouseX = newMouseX;
    mouseY = newMouseY;
  }

  useEffect(() => {
    animationRequest.current = requestAnimationFrame(drawFrame);
    return () => cancelAnimationFrame(animationRequest.current);
  })

  return <WebGL mouseMoved={mouseMoved} drawRef={webGLDrawRef} />;
}
