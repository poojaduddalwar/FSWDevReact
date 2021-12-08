import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
//this createStore is a function imported from redux which allows us to create that global store
import reducer from './reducer/Reducer';
import { Provider } from 'react-redux';
//this provider is gives access to the redux store
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, { products: ['iphone11', 'iphone12', 'iphone13'], categories: ['mobiles', 'headphone', 'cases'] }, composeWithDevTools())
//reducer is the plain js function which can modify the store depending on what action you pass 

//the createStore function accepts 3 parameters :-
// 1. reducer
// 2. initial state (so whatever data u pass as 2nd parameter is going to be the initial state of the redux store)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

