import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menuItems/menuItemSlice";
export const store = configureStore({
  reducer: {
    menu: menuReducer,
  },
});
