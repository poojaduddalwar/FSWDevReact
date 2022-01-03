import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer/Reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const chores = [
  {
    id: 1,
    text: "Take a medicine"
  },
  {
    id: 2,
    text: "Eat food"
  },
  {
    id: 3,
    text: "Sleep"
  },
]

const store = createStore(reducer, chores, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

