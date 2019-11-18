import { Record, RecordOf } from 'immutable';

import { EditorActionTypes, EditorActions, SetCode, SetCallUnderMouse } from './actions';
import { orbits as initialCode } from './demos';
import { Node } from "../rewrite/callHighlighting"

function handleSetCode(currentState: EditorState, { newCode }: SetCode) {
  return currentState.set('code', newCode);
}

function handleSetCallUnderMouse(currentState: EditorState, { call }: SetCallUnderMouse) {
  if (JSON.stringify(call) !== JSON.stringify(currentState.get('callUnderMouse'))) {
    return currentState.set('callUnderMouse', call);
  } else {
    return currentState;
  }
}

const initialState = {
  code: initialCode,
  callUnderMouse: null as Node,
};

const makeEditorState = Record(initialState);
type EditorState = RecordOf<typeof initialState>;

export function editorReducer(
  state = makeEditorState(),
  action: EditorActions
): EditorState {
  switch (action.type) {
    case EditorActionTypes.SetCode: return handleSetCode(state, action);
    case EditorActionTypes.SetCallUnderMouse: return handleSetCallUnderMouse(state, action);
    default: return state;
  }
}
