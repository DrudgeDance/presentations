// src/features/wauth/wauthSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWatchState = createAsyncThunk(
  'wauth/fetchWatchState',
  async () => {
    const response = await fetch('/auth');
    const data = await response.json();
    return data.message === 'authorized';
  }
);

const wauthSlice = createSlice({
  name: 'wauth',
  initialState: {
    isWatching: false,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWatchState.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWatchState.fulfilled, (state, action) => {
        state.loading = false;
        state.isWatching = action.payload;
      })
      .addCase(fetchWatchState.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default wauthSlice.reducer;
