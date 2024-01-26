import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewBus,
  deleteBus,
  singleBus,
  updateBus,
  registerBus,
} from "../actions/busAction";

const busesSlice = createSlice({
  name: "buses",
  initialState: {
    buses: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewBus.fulfilled, (state, action) => {
        state.loading = false;
        state.buses = action.payload;
      })
      .addCase(viewBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBus.fulfilled, (state, action) => {
        state.loading = false;
        state.buses = action.payload;
      })
      .addCase(updateBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBus.fulfilled, (state, action) => {
        state.loading = false;
        state.buses = action.payload;
      })
      .addCase(deleteBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleBus.fulfilled, (state, action) => {
        state.loading = false;
        state.buses = action.payload;
      })
      .addCase(singleBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerBus.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerBus.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.buses = action.payload;
      })
      .addCase(registerBus.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default busesSlice.reducer;
