import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { addMenuItem } from "./menuApi";
const fetchMenuList = createAsyncThunk(
  "menu/fetchMenuList",
  async (dataCredentials) => {
    const response = await addMenuItem(dataCredentials);
    return response.data;
  }
);

const initialState = {
  menuList: [],
  isLoading: null,
  isError: null,
};

export const menuSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMenuList.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    }).addCase(fetchMenuList.fulfilled,(state,action)=>{
        state.isLoading= false;
        state.isError=false;
        state.menuList = action.payload
    })
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = menuSlice.actions;

export default menuSlice.reducer;
