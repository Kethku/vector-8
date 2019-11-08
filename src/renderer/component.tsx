import * as React from "react";

import { EventManager } from "../eventManager";

export const CanvasMounted = new EventManager<[HTMLCanvasElement]>();
async function canvasMounted(newCanvas: HTMLCanvasElement) {
  CanvasMounted.Publish(newCanvas);
}

export function GameComponent() {
  return <canvas ref={canvasMounted} touch-action="none" style={{
    width: '100%',
    height: '100%'
  }}/>;
}
