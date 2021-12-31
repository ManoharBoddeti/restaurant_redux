import {
  ADD_TO_CART,
  DECREMENT_ITEM,
  DELETE_ITEMS,
  INCREMENT_ITEM,
} from "../types/Types";

export const addToCart = (item) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const deleteItems = (index) => {
  return {
    type: DELETE_ITEMS,
    payload: index,
  };
};

export const incrementItem = (index) => {
  return {
    type: INCREMENT_ITEM,
    payload: index,
  };
};
export const decrementItem = (index) => {
  return {
    type: DECREMENT_ITEM,
    payload: index,
  };
};
