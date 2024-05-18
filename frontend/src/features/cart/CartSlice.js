import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addItemsToCart } from "./CartApi";
// fetching the cart items
// cart adding all items
export const cartAddItems = createAsyncThunk(
  "cart/cartSlicefetchAsync",
  async (itemId) => {
    try {
      const respones = await addItemsToCart(itemId);
      // need to return the response
    } catch (err) {
      console.log(err.message);
    }
  }
);
// deleting the cart items
// clearing the cart all items
const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
