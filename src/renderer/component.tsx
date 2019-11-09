import * as React from "react";

import { EventManager } from "../eventManager";

export let currentCanvas: HTMLCanvasElement;
export const CanvasMounted = new EventManager<[HTMLCanvasElement]>();
async function canvasMounted(newCanvas: HTMLCanvasElement) {
  currentCanvas = newCanvas;
  CanvasMounted.Publish(newCanvas);
}

export function GameComponent() {
  return <canvas ref={canvasMounted} touch-action="none" style={{
    width: '100%',
    height: '100%',
    display: 'block'
  }}/>;
}
