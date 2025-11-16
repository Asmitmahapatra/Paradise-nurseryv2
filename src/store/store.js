import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

function cartReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
}

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
