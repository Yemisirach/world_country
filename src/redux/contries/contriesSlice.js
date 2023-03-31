import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fechCountries = createAsyncThunk(
  'countries/FechCountries',
  async () => {
    const result = await fetch('https://restcountries.com/v2/all');
    return result.json();
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState: {
    loading: false,
    error: null,
    countries: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fechCountries.pending, (state) => {
        state.loading = true;
      })
      .addCase(fechCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.countries = action.payload;
      })
      .addCase(fechCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default countriesSlice.reducer;
