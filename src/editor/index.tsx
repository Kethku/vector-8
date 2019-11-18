import * as React from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';

import { AppState } from '../reducers'
import { setCode, setCallUnderMouse } from './actions';
import { theme } from "./theme";
import { typeDefinition } from '../game/lyonAPI';
import { callUnderMouse } from '../rewrite/callHighlighting';

import immutableTypeDefinitions from './immutableJSTypeDefinitions.txt';

monaco.editor.defineTheme("vector-8", theme as any);
monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
  noSemanticValidation: false,
  noSyntaxValidation: false
});

monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
  allowNonTsExtensions: true
});

monaco.languages.typescript.javascriptDefaults.addExtraLib(immutableTypeDefinitions, 'file://immutable.d.ts');
monaco.languages.typescript.javascriptDefaults.addExtraLib(typeDefinition, 'file://global.d.ts');

const editorOptions = {
  minimap: { enabled: false },
  automaticLayout: true,
  glyphMargin: false,
  // Undocumented see https://github.com/Microsoft/vscode/issues/30795#issuecomment-410998882
  lineDecorationsWidth: 0,
  lineNumbersMinChars: 0,
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden',
    verticalScrollbarSize: 0,
    horizontalScrollbarSize: 0,
  }
};

export function Editor() {
  const dispatch = useDispatch();
  const code = useSelector((state: AppState) => state.editor.code);
  const onChange = (newCode: string) => dispatch(setCode(newCode))

  const decorationsRef = useRef([]);


  function didMount(editor: monaco.editor.IStandaloneCodeEditor) {
    editor.onMouseMove(({ target }) => {
      let node = callUnderMouse(editor.getValue(), target.position);
      if (node) {
        decorationsRef.current = editor.deltaDecorations(decorationsRef.current, [
          {
            range: new monaco.Range(node.loc.start.line, node.loc.start.column + 1, node.loc.end.line, node.loc.end.column + 1),
            options: { inlineClassName: 'HoveredCall' }
          }
        ]);
        dispatch(setCallUnderMouse(node));
        return;
      }
      dispatch(setCallUnderMouse(null));
      decorationsRef.current = editor.deltaDecorations(decorationsRef.current, []);
    });

    editor.onKeyUp((event) => {
      if (!event.ctrlKey) {
        decorationsRef.current = editor.deltaDecorations(decorationsRef.current, []);
      }
    });
  }

  return (
    <MonacoEditor
      options={editorOptions as any}
      language="javascript"
      theme="vector-8"
      value={code}
      onChange={onChange} 
      editorDidMount={didMount}
    />
  );
}
