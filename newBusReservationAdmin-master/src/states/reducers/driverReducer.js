import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewDriver,
  singleDriver,
  registerDriver,
  updateDriver,
  deleteDriver,
} from "../actions/driverAction";

const driverSlice = createSlice({
  name: "driver",
  initialState: {
    driver: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.driver = action.payload;
      })
      .addCase(viewDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.driver = action.payload;
      })
      .addCase(updateDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.driver = action.payload;
      })
      .addCase(deleteDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.driver = action.payload;
      })
      .addCase(singleDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerDriver.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerDriver.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.driver = action.payload;
      })
      .addCase(registerDriver.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default driverSlice.reducer;
