import * as React from 'react';
import SplitPane from 'react-split-pane';

import { MediaControls } from "./mediaControls";
import { Editor } from "./editor";
import { Game } from "./game";

export function App() {
  return (
    <SplitPane split="vertical" minSize={200} defaultSize={550}>
      <div style={{ width: "100%", height: "100%" }}>
        <MediaControls />
        <Editor />
      </div>
      <Game />
    </SplitPane>
  );
};
