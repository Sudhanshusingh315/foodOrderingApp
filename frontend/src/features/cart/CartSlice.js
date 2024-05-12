import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cartSlicefetchAsync = createAsyncThunk(
  "cart/cartSlicefetchAsync",
  async () => {
    
  }
);

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
