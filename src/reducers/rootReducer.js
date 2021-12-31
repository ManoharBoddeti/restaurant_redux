import { combineReducers } from "redux";

import tableReducer from "./tableReducer";

import itemReducer from './itemReducer';

import cartReducer from "./cartReducer";


const rootReducer = combineReducers({
  table: tableReducer,
  dishes : itemReducer,
  cartItems : cartReducer
});

export default rootReducer;
