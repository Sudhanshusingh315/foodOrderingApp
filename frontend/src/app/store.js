import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../features/cart/CartSlice";
import authSlice from "../features/Auth/authSlice";
export const store = configureStore({
  reducer: {
    cart: CartSlice,
    auth: authSlice,
  },
});
