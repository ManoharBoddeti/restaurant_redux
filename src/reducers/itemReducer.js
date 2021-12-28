import Menu from "../components/Menu";
import { ADD_ITEMS } from "../types/Types";

const initialState = {
  items: Menu,
};

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
};

export default itemReducer;
