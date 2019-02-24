import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import '../index.css'

if (process.env.NODE_ENV === 'development') {
  require('./localSecrets'); // this will mutate the process.env object with your secrets.
}




ReactDOM.render(
    <Provider store={store}>
     <div>Hello, world!</div>
     
  </Provider>,
 
  document.getElementById('app') // make sure this is the same as the id of the div in your index.html
);