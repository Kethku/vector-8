import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Realm from 'realms-shim';

import { draw } from "./renderer/webgl";
import { GameComponent, currentCanvas } from "./renderer/component";
import { publicAPI } from "./lyonAPI";
import MonacoEditor from 'react-monaco-editor';

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

const initialCode = `
const count = 300;

function initCircle() {
  return {
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    vx: 0,
    vy: 0,
    radius: Math.pow(
      (Math.random() * 2 - 1) * 0.4, 
      3),
    color: Math.floor(
      Math.random() * 7
    ) + 1
  }
}

update = (state) => {
  if (!state) {
    state = [];
    for (let i = 0; i < count; i++) {
      state.push(initCircle());
    }
  }

  let newState = [];
  for (let circle of state) {
    let { x, y, vx, vy } = circle;
    let dx = mouseX - x;
    let dy = mouseY - y;

    let dist = Math.sqrt(dx * dx + dy * dy);

    let ax = dx / Math.pow(dist, 1.5);
    let ay = dy / Math.pow(dist, 1.5);

    newState.push({
      ...circle,
      x: x + vx,
      y: y + vy,
      vx: vx * 0.99 + ax / 1000,
      vy: vy * 0.99 + ay / 1000
    });
  }

  return newState;
}

draw = (circles) => {
  clear();
  for (let circle of circles) {
    circFill(
      circle.x, circle.y, 
      circle.radius, 
      circle.color);
  }
}
`.trim();

let realm = null;
function evalCode(code: string) {
  realm = Realm.makeRootRealm();
  for (let key in publicAPI) {
    realm.global[key] = publicAPI[key];
  }
  realm.global.update = (state: any) => state;
  realm.global.draw = () => {};

  try {
    realm.evaluate(code);
  } catch (error) {
    console.log("eval error: ", error);
  }
}

const divStyle = {
  width: "100vw",
  height: "100vh",
  display: 'grid',
  gridTemplateAreas: `
    'editor renderer'
  `,
  gridTemplateColumns: "25vw 75vw"
}

const App: React.FC = () => {
  const monocoEditor = useRef(null)
  const [ code, setCode ] = useState(initialCode)

  useEffect(() => {
    window.addEventListener('resize', () => {
      monocoEditor.current?.layout();
    })
  }, [])

  useEffect(() => {
    evalCode(code);
  }, [code])

  function setEditor(editor) {
    monocoEditor.current = editor;
  }

  return (
    <div style={divStyle}>
      <div style={{ gridArea: 'editor' }}>
        <MonacoEditor
          language="javascript"
          theme="vs-dark"
          editorDidMount={setEditor} 
          value={code}
          onChange={setCode} />
      </div>
      <div style={{ gridArea: 'renderer', height: "100vh" }}>
        <GameComponent />
      </div>
    </div>
  );
};

let state: any = null;
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
  draw();
  requestAnimationFrame(drawFrame);
}
requestAnimationFrame(drawFrame);

render(<App/>, document.getElementById("root"));
