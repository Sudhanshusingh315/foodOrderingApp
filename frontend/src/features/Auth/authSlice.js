import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "./authApi";

export const authLogin = createAsyncThunk(
  "auth/authLogin",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await loginUser(userCredentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const authRegister = createAsyncThunk(
  "auth/authRegister",
  async (userCredentials, { rejectWithValue }) => {
    try {
      const response = await registerUser(userCredentials);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  value: 0,
  isLoading: null,
  isError: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // login
      .addCase(authLogin.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
        if (action.payload) {
          localStorage.setItem("userInfo", JSON.stringify(action.payload));
        }
      })
      .addCase(authLogin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(authLogin.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
      })
      //authRegister ->
      .addCase(authRegister.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(authRegister.fulfilled, (state, action) => {
        state.userInfo = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(authRegister.rejected, (state, action) => {
        state.isError = action.payload;
        state.isLoading = false;
        state.userInfo = null;
      });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = authSlice.actions;

export default authSlice.reducer;
