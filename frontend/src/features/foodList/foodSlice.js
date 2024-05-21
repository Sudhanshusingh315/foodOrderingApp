import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchFoodAsyn = createAsyncThunk(
  "food/fetchFoodAsync",
  async () => {
    const response = await axios.get("/api/food/");
    return response.data;
  }
);

const initialState = {
  foodItem: null,
  isLoading: null,
  isError: null,
  added: false,
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    initialAdd: (state) => {
      state.added = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFoodAsyn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchFoodAsyn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        let { foodList } = action.payload;
        state.foodItem = foodList;
      });
  },
});

export const { initialAdd } = foodSlice.actions;

export default foodSlice.reducer;
