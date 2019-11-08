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

let count = 20;
let distance = 50;

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
            let radius = Math.sqrt(dx * dx + dy * dy) / 10;
            if (radius > distance) {
              lyonAPI.fillRectangle(circleX - distance / 2, circleY - distance / 2, distance, distance);
            } else {
              lyonAPI.fillCircle(circleX, circleY, radius);
            }
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
