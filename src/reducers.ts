import { Function } from 'ts-toolbelt';
import { combineReducers } from 'redux';

import { editorReducer } from './editor/reducers';
import { mediaControlsReducer } from './mediaControls/reducers';

export const rootReducer = combineReducers({
  editor: editorReducer,
  mediaControls: mediaControlsReducer
});

export type AppState = Function.Return<typeof rootReducer>;
