import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../redux/contries/contriesSlice";

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
