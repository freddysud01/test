import {createStore} from "redux"
import checkoutReducer from './checkoutReducer';
import checkoutState from './checkoutState';

const walmartStore= createStore(checkoutReducer, checkoutState);

export default walmartStore