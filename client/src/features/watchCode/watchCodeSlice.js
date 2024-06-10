// watchCodeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { closeModal } from './../modal/modalSlice.js'

export const submitCode = createAsyncThunk(
  'watchCode/submitCode',
  async ({ code, fullscreen }, thunkAPI) => {
    try {
      console.log("CODE::", code)
      const response = await fetch('/wauth', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: code || '',  // Send only the code
        credentials: 'include'  // Ensures cookies are sent with the request
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("DATARESP::", data)
      if (data.authorized) {
        thunkAPI.dispatch(closeModal());  // Close the modal on success
      }

      return { authorized: data.authorized, url: data.url, fullscreen: fullscreen };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const watchCodeSlice = createSlice({
  name: 'watchCode',
  initialState: {
    isWatching: false,
    isWatchingUrl: '',
    fullscreen: false,
    loading: false,
    error: null,
  },
  reducers: {
    setFullscreen: (state, action) => {
      state.fullscreen = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitCode.pending, (state) => {
        console.log("STATE/CODE::", state)
        state.loading = true;
        state.error = null;
      })
      .addCase(submitCode.fulfilled, (state, action) => {
        state.loading = false;
        if (action.payload.authorized) {
          state.isWatching = true;
          state.isWatchingUrl = action.payload.url;
          state.fullscreen = action.payload.fullscreen;
        }
      })
      .addCase(submitCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setFullscreen } = watchCodeSlice.actions;

export default watchCodeSlice.reducer;