import * as React from 'react';
import { render } from 'react-dom';

import { draw } from "./renderer/webgl";
import { GameComponent, currentCanvas } from "./renderer/component";
import { publicAPI } from "./lyonAPI";
// import MonacoEditor from 'react-monaco-editor';

import './baseStyle.css';

let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', e => {
  if (currentCanvas) {
    let canvasRect = currentCanvas.getBoundingClientRect();
    mouseX = (e.clientX - canvasRect.left) * 2 / canvasRect.width - 1;
    mouseY = -(e.clientY - canvasRect.top) * 2 / canvasRect.width + canvasRect.height / canvasRect.width;
  }
});

let count = 20;
let distance = 2 / count;

const App: React.FC = () => {
  return <GameComponent />;
  // return (
  //   <MonacoEditor
  //     language="javascript"
  //     theme="vs-dark"/>
  // )
};


function drawFrame() {
  publicAPI.clear();
  for (let x = -count; x <= count; x++) {
    for (let y = -count; y <= count; y++) {
      let circleX = x / count;
      let circleY = y / count;
      let dx = circleX - mouseX;
      let dy = circleY - mouseY;
      let radius = Math.sqrt(dx * dx + dy * dy) / 10;
      if (radius > distance / 2.5) {
        publicAPI.rectFill(circleX, circleY, distance, distance);
      } else {
        publicAPI.circFill(circleX, circleY, radius);
      }
    }
  }
  draw();
  requestAnimationFrame(drawFrame);
}
requestAnimationFrame(drawFrame);

render(<App/>, document.getElementById("root"));
