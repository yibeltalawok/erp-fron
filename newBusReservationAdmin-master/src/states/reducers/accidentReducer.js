import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewAccident,
  singleAccident,
  registerAccident,
  updateAccident,
  deleteAccident,
} from "../actions/accidentAction";

const accidentSlice = createSlice({
  name: "accident",
  initialState: {
    accident: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewAccident.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewAccident.fulfilled, (state, action) => {
        state.loading = false;
        state.accident = action.payload;
      })
      .addCase(viewAccident.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAccident.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAccident.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.accident = action.payload;
      })
      .addCase(registerAccident.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateAccident.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAccident.fulfilled, (state, action) => {
        state.loading = false;
        state.accident = action.payload;
      })
      .addCase(updateAccident.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteAccident.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAccident.fulfilled, (state, action) => {
        state.loading = false;
        state.accident = action.payload;
      })
      .addCase(deleteAccident.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleAccident.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleAccident.fulfilled, (state, action) => {
        state.loading = false;
        state.accident = action.payload;
      })
      .addCase(singleAccident.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default accidentSlice.reducer;
