import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { keyId, checkout } from "./paymentAPI";

// get the api key for authorization;
export const getAPIkey = createAsyncThunk("payment/getAPIkey", async () => {
  const {
    data: { key },
  } = await keyId();
  return key;
});

// initiating checkout
export const initiatingCheckout = createAsyncThunk(
  "payment/initiatingCheckout",
  async (amount) => {
    const response = await checkout(amount);
    console.log("response",response);
    return response.data;
  }
);
const initialState = {
  key: null,
  isLoading: null,
  isError: null,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAPIkey.pending, (state) => {
        console.log("pending state for getting key");
      })
      .addCase(getAPIkey.fulfilled, (state, action) => {
        console.log("key arrived");
        state.key = action.payload;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = paymentSlice.actions;

export default paymentSlice.reducer;
