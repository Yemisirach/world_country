import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './contries/contriesSlice';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
