import { Record, RecordOf } from 'immutable';

import { EditorActionTypes, EditorActions, SetCode } from './actions';
import { circleGrid as initialCode } from './demos';
import { unreachable } from "../utils";

function handleSetCode(currentState: EditorState, { newCode }: SetCode) {
  return currentState.set('code', newCode);
}

const initialState = {
  code: initialCode
};

const makeEditorState = Record(initialState);
type EditorState = RecordOf<typeof initialState>;

export function editorReducer(
  state = makeEditorState(),
  action: EditorActions
): EditorState {
  if (action.type.startsWith("@@")) return state;
  switch (action.type) {
    case EditorActionTypes.SetCode: return handleSetCode(state, action);
    default: unreachable(action.type);
  }
}
