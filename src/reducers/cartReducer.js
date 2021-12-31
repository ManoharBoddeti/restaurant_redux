import {
  ADD_TO_CART,
  DELETE_ITEMS,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
} from "../types/Types";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  let cart = [...state.cart];
  switch (action.type) {
    case ADD_TO_CART:
      let itemNames = state.cart.map((item) => item.ItemName);
      let index = itemNames.indexOf(action.payload.ItemName);
      if (index >= 0) {
        cart[index].quantity = state.cart[index].quantity + 1;
        return {
          cart,
        };
      } else {
        action.payload.quantity = 1;
        return {
          cart: [...state.cart, action.payload],
        };
      }

    case DELETE_ITEMS:
      cart = [
        ...cart.slice(0, action.payload),
        ...cart.slice(action.payload + 1),
      ];
      return {
        cart,
      };
    case INCREMENT_ITEM:
      cart[action.payload].quantity = state.cart[action.payload].quantity + 1;
      return {
        cart,
      };
    case DECREMENT_ITEM:
      if (state.cart[action.payload].quantity > 1) {
        cart[action.payload].quantity = state.cart[action.payload].quantity - 1;
        return {
          cart,
        };
      } else {
        return {
          cart,
        };
      }

    default:
      return state;
  }
};

export default cartReducer;
