import items from "../data/items.json";
import { ADD_ITEMS } from "../types/Types";

export const addItems = () => {
  return {
    type: ADD_ITEMS,
    payload: items,
  };
};
