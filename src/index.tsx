import * as React from 'react';
import { useEffect } from 'react';
import { render } from 'react-dom';

import { draw } from "./renderer/webgl";
import { GameComponent } from "./renderer/component";
// import MonacoEditor from 'react-monaco-editor';

import './baseStyle.css';

let mouseX = 0;
let mouseY = 0;
window.addEventListener('mousemove', e => {
  mouseX = e.clientX - window.innerWidth / 2;
  mouseY = (window.innerHeight - e.clientY) - window.innerHeight / 2;
});

let count = 10;
let distance = 12;

const App: React.FC = () => {
  useEffect(() => {
    (async () => {
      const lyonAPI = await import("../pkg");
      function drawFrame() {
        for (let x = -count; x < count; x++) {
          for (let y = -count; y < count; y++) {
            let circleX = x * distance;
            let circleY = y * distance;
            let dx = circleX - mouseX;
            let dy = circleY - mouseY;
            lyonAPI.fillCircle(circleX, circleY, Math.min(Math.sqrt(dx * dx + dy * dy) / 10, distance));
          }
        }
        draw(lyonAPI);
        requestAnimationFrame(drawFrame);
      }
      requestAnimationFrame(drawFrame);
    })();
  }, [])

  return <GameComponent />;
  // return (
  //   <MonacoEditor
  //     language="javascript"
  //     theme="vs-dark"/>
  // )
};

render(<App/>, document.getElementById("root"));
