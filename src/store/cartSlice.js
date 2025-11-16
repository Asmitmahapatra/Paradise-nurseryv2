import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {}, // store items as object by ID
    totalQuantity: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;

      if (state.items[item.id]) {
        state.items[item.id].quantity += 1;
      } else {
        state.items[item.id] = { ...item, quantity: 1 };
      }

      state.totalQuantity += 1;
    },

    increaseQty: (state, action) => {
      const id = action.payload;
      state.items[id].quantity += 1;
      state.totalQuantity += 1;
    },

    decreaseQty: (state, action) => {
      const id = action.payload;
      if (state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
        state.totalQuantity -= 1;
      }
    },

    deleteItem: (state, action) => {
      const id = action.payload;
      state.totalQuantity -= state.items[id].quantity;
      delete state.items[id];
    },
  },
});

export const { addToCart, increaseQty, decreaseQty, deleteItem } =
  cartSlice.actions;

export default cartSlice.reducer;