import { combineReducers } from "redux";

import tableReducer from "./tableReducer";

import itemReducer from './itemReducer'


const rootReducer = combineReducers({
  table: tableReducer,
  items : itemReducer
});

export default rootReducer;
