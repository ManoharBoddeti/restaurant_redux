import { ADD_TABLE } from "../types/Types";

const initialState = {
    numOfTables: [1, 1, 1, 1 , 1 ],
};

const tableReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TABLE:
      return {
        numOfTables: [...state.numOfTables , 1]
      }
    default:
      return state;
  }
};

export default tableReducer;
