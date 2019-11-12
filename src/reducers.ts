import { Function } from 'ts-toolbelt';
import { combineReducers } from 'redux';

import { editorReducer } from './editor/reducers';

export const rootReducer = combineReducers({
  editor: editorReducer
});

export type AppState = Function.Return<typeof rootReducer>;
