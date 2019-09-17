import {combineReducers} from 'redux';
import cartReducer from './cart';
import commonReducer from './common';

export default combineReducers({
    cart:cartReducer,
    common:commonReducer
});