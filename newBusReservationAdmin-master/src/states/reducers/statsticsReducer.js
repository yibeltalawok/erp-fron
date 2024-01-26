import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  ViewStatistics
} from "../actions/statisticsAction";

const statisticsSlice = createSlice({
  name: "statstics",
  initialState: {
    statstics: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(ViewStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(ViewStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.statstics = action.payload;
      })
      .addCase(ViewStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default statisticsSlice.reducer;
