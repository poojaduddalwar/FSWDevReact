import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer/Reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
//this gives the App access to your history stack

const products = [
  {
    id: 1,
    name: "iPhone11",
    description: 'This is iPhone11'
  },
  {
    id: 2,
    name: "iPhone12 pro",
    description: 'This is iPhone12 pro'
  },
  {
    id: 3,
    name: "iPhone13 pro max",
    description: 'This is iPhone13 pro max'
  },
]

const store = createStore(reducer, products, composeWithDevTools())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

