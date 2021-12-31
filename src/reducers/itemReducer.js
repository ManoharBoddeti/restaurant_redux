import {
  ADD_VEG_MAINCOURSE,
  ADD_VEG_STARTERS,
  ADD_NONVEG_MAINCOURSE,
  ADD_NONVEG_STARTERS,
  REMOVE_VEG_STARTERS,
  REMOVE_VEG_MAINCOURSE,
  REMOVE_NONVEG_STARTERS,
  REMOVE_NONVEG_MAINCOURSE,
} from "../types/Types";

import Menu from "../data/items.json";

const initialState = {
  items: Menu,
  vegStarters: [],
  vegMainCourse: [],
  NonvegStarters: [],
  NonVegMainCourse: [],
};

const itemReducer = (state = initialState, action) => {
  var items = [...state.items];
  switch (action.type) {
    case ADD_VEG_STARTERS:
      items = items.filter((item) => item.menu.indexOf(action.payload) === 0);
      return {
        ...state,
        vegStarters: items,
      };
    case REMOVE_VEG_STARTERS:
      return {
        ...state,
        vegStarters: [],
      };
    case ADD_VEG_MAINCOURSE:
      items = items.filter((item) => item.menu.indexOf(action.payload) === 0);
      return {
        ...state,
        vegMainCourse: items,
      };
    case REMOVE_VEG_MAINCOURSE:
      return {
        ...state,
        vegMainCourse: [],
      };
    case ADD_NONVEG_STARTERS:
      items = items.filter((item) => item.menu.indexOf(action.payload) === 0);
      return {
        ...state,
        NonvegStarters: items,
      };
    case REMOVE_NONVEG_STARTERS:
      return {
        ...state,
        NonvegStarters: [],
      };
    case ADD_NONVEG_MAINCOURSE:
      items = items.filter((item) => item.menu.indexOf(action.payload) === 0);
      return {
        ...state,
        NonVegMainCourse: items,
      };
    case REMOVE_NONVEG_MAINCOURSE:
      return {
        ...state,
        NonVegMainCourse: [],
      };
    default:
      return state;
  }
};

export default itemReducer;
