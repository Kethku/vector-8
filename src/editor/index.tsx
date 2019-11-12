import * as React from 'react';
import { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from 'monaco-editor';

import { AppState } from '../reducers'
import { setCode } from './actions';
import { theme } from "./theme";

export function Editor() {
  const dispatch = useDispatch();
  const code = useSelector((state: AppState) => state.editor.code);
  const onChange = (newCode: string) => dispatch(setCode(newCode))

  const monocoEditor = useRef(null)

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
    <MonacoEditor
      language="javascript"
      theme="vector-8"
      editorDidMount={setEditor} 
      editorWillMount={willMount}
      value={code}
      onChange={onChange} />
  );
}
