import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "../redux/Home/homeslice";

const store = configureStore({
  reducer: {
    rockets: homeReducer,
  },
});

export default store;
