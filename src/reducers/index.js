import { combineReducers } from "redux";
import ProductsReducer from './ProductsReducer'
import {persistReducer} from 'redux-persist'
import storage from'redux-persist/lib/storage'
//create persistance of cart item
const root=combineReducers({
    products:persistReducer({
        key:['products'],
        storage,
        whitelist:['cart']
    },ProductsReducer)
})

export default root;