import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import RootReducer from "./reducer/root.reducer.js"
import App from './App';
import './index.css';

const store = createStore(RootReducer, {})


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
