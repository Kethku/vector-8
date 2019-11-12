import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { App } from './app';
import { rootReducer } from './reducers';

import './baseStyle.css';

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById("root")
);
