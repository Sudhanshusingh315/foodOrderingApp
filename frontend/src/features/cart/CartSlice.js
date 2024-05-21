import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addItemsToCart,
  deleteFromCart,
  fetchItemsFromCart,
  deleteParticulateItemFromCart,
} from "./CartApi";

// fetching the cart items
export const fetchCartItemsAsync = createAsyncThunk(
  "cart/cartSlicefetchAsync",
  async () => {
    try {
      const response = await fetchItemsFromCart();
      return response.cart;
      // need to return the response
    } catch (err) {
      console.log(err.message);
    }
  }
);
// cart adding all items
export const cartAddItems = createAsyncThunk(
  "cart/addItemsAsync",
  async (itemId) => {
    try {
      const respones = await addItemsToCart(itemId);
      return respones.success;
      // need to return the response
    } catch (err) {
      console.log(err.message);
    }
  }
);
// decreasting the cart items
export const deleteCarteItemsAsync = createAsyncThunk(
  "cart/deleteAsync",
  async (itemId) => {
    try {
      const deletedId = await deleteFromCart(itemId);
      return deletedId;
      // need to return the response
    } catch (err) {
      console.log(err.message);
    }
  }
);

// deleting them from the cart regardless of the quantity
export const deletingParticulateItemAync = createAsyncThunk(
  "cart/deleteParticularAsync",
  async (itemId) => {
    try {
      const deletedId = await deleteParticulateItemFromCart(itemId);
      return deletedId;
      // need to return the response
    } catch (err) {
      console.log(err.message);
    }
  }
);
// clearing the cart all items
// total price
export const priceAsync = createAsyncThunk(
  // CHANCE THE NAME HERE
  "cart/cartSlicefetchAsync",
  async (itemId) => {}
);
const initialState = {
  cartItems: [],
  isLoading: null,
  isError: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItemsAsync.pending, (state) => {
        state.isLoading = true;
        state.isError = true;
      })
      .addCase(fetchCartItemsAsync.rejected, (state, action) => {
        state.isLoading = false;
        // add the error value
        state.isError = true;
      })
      .addCase(fetchCartItemsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.cartItems = action.payload;
      })
      .addCase(deletingParticulateItemAync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        console.log("deleted payload", action.payload);
        let id = action.payload;
        let newCart = state.cartItems.filter((el) => {
          return el.foodId._id !== id;
        });
        state.cartItems = newCart;
      })
      .addCase(deleteCarteItemsAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
      });
  },
});

export const {} = cartSlice.actions;

export default cartSlice.reducer;
