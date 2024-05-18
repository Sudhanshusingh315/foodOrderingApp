import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

export const fetchFoodAsyn = createAsyncThunk(
  "food/fetchFoodAsync",
  async () => {
    const response = await axios.get('/api/food/');
    return response.data;
  }
);

const initialState = {
  foodItem:null,
  isLoading:null,
  isError:null
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {},
  extraReducers:(builder) =>{
    builder.addCase(fetchFoodAsyn.pending,(state)=>{
        state.isLoading = true;
        state.isError = false;
    }).addCase(fetchFoodAsyn.fulfilled,(state,action)=>{
        state.isLoading = false;
        state.isError= false;
        let {foodList} = action.payload;
        state.foodItem = foodList;
    })
  }
});

export const {} = foodSlice.actions;

export default foodSlice.reducer;