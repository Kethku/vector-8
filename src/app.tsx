import * as React from 'react';

import { Editor } from "./editor";
import { Game } from "./game";

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

export function App() {
  return (
    <div style={divStyle}>
      <div style={{ gridArea: 'editor' }}>
        <Editor />
      </div>
      <div style={{ gridArea: 'renderer' }}>
        <Game />
      </div>
    </div>
  );
};
