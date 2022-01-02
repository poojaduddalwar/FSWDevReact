import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import reducer from './reducer/Reducer';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, { products: ['iphone11', 'iphone12', 'iphone13'], categories: ['mobiles', 'headphone', 'cases'] }, composeWithDevTools())

//here whatever is passed as the second parameter of createStore function is the initial state of the redux store. we can add an empty object as second parameter so that initial state will be empty 
//3rd parameter is the middleware i.e composeWithDevTools . it is because of this middleware we are able to use redux devtools on our application.

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

