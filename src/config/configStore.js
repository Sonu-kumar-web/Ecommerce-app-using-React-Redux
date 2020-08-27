import {createStore, applyMiddleware} from 'redux';
import root from '../reducers/index';
import thunk from 'redux-thunk';
import{persistStore} from'redux-persist'

// configure store and make cart item persistant using redux-persist

function configStore(){
  
    let store=createStore(
        root,
        applyMiddleware(thunk)
      );
    return {store,persistor:persistStore(store)}
}

export default configStore;
