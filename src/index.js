import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/noty/lib/noty.css'
import '../node_modules/noty/lib/themes/mint.css'
import App from './Components/App';
import configStore from './config/configStore';
import { Provider } from 'react-redux';

let {store}=configStore();
console.log("store",store.getState())
ReactDOM.render(

  <Provider store={store}>
    {console.log(store.getState())}
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,

  document.getElementById('root')
);


