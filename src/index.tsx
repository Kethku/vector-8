import * as React from 'react';
import { useRef, useEffect, useState } from 'react';
import { render } from 'react-dom';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';

import { theme } from "./theme";
import { Game } from "./game";

import './baseStyle.css';

// const initialCode = `
// const count = 500;

// function initCircle() {
//   let x = Math.random() * 2 - 1;
//   return {
//     x,
//     y: 0.5,
//     vx: 0,
//     vy: 0,
//     radius: (x + 1.5) / 50,
//     color: Math.floor(
//       Math.random() * 7
//     ) + 1
//   }
// }

// update = (state) => {
//   if (!state) {
//     state = [];
//     for (let i = 0; i < count; i++) {
//       state.push(initCircle());
//     }
//   }

//   let newState = [];
//   for (let circle of state) {
//     let { x, y, vx, vy, radius } = circle;
//     let dx = mouseX - x;
//     let dy = mouseY - y;

//     let dist = Math.sqrt(dx * dx + dy * dy);

//     let ax = dx / Math.pow(dist, 1.5);
//     let ay = dy / Math.pow(dist, 1.5);

//     newState.push({
//       ...circle,
//       x: x + vx,
//       y: y + vy,
//       vx: vx * 0.99 + ax / radius / 100000,
//       vy: vy * 0.99 + ay / radius / 100000
//     });
//   }

//   return newState;
// }

// draw = (circles) => {
//   clear();
//   for (let circle of circles) {
//     circFill(
//       circle.x, circle.y, 
//       circle.radius, 
//       circle.color);
//   }
// }
// `.trim();

const initialCode = `
update = (state) => {
  if (!state) { // Initialize if state is undefined.
    state = {};
  }
  return state;
}

draw = (state) => {
  let count = 20;
  let border = 10;
  clear();
  for (let x = -count + border; x <= count - border; x++) {
    for (let y = -count + border; y <= count - border; y++) {
      let circleX = x / count;
      let circleY = y / count;
      let dx = circleX - mouseX;
      let dy = circleY - mouseY;
      let distance = Math.sqrt(dx * dx + dy * dy);
      let radius = distance / 10;
      let color = x + y + mouseX * 10 + mouseY * 10;
      circFill(circleX, circleY, radius, color);
    }
  }
}
`.trim();

const divStyle = {
  width: "100vw",
  height: "100vh",
  display: 'grid',
  gridTemplateAreas: `
    'editor renderer'
  `,
  gridTemplateColumns: "25vw 75vw",
  gridTemplateRows: "100%"
}

const App: React.FC = () => {
  const monocoEditor = useRef(null)
  const [ code, setCode ] = useState(initialCode)

  function setEditor(editor: any) {
    monocoEditor.current = editor;
  }

  function willMount() {
    monaco.editor.defineTheme("vector-8", theme as any);
  }

  useEffect(() => {
    window.addEventListener('resize', () => {
      monocoEditor.current?.layout();
    })
  }, [])

  return (
    <div style={divStyle}>
      <div style={{ gridArea: 'editor' }}>
        <MonacoEditor
          language="javascript"
          theme="vector-8"
          editorDidMount={setEditor} 
          editorWillMount={willMount}
          value={code}
          onChange={setCode} />
      </div>
      <div style={{ gridArea: 'renderer' }}>
        <Game code={code} />
      </div>
    </div>
  );
};

render(<App/>, document.getElementById("root"));
