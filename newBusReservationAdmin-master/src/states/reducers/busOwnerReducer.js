import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteBusOwner,
  viewBusOwner,
  registerBusOwner,
  updateBusOwner,
  singleBusOwner,
} from "../actions/busOwnerAction";

const busOwnerSlice = createSlice({
  name: "busOwner",
  initialState: {
    busOwner: [],
    busOwner: {},
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerBusOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerBusOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.busOwner = action.payload;
      })
      .addCase(registerBusOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewBusOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewBusOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.busOwner = action.payload;
      })
      .addCase(viewBusOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateBusOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateBusOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.busOwner = action.payload;
      })
      .addCase(updateBusOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteBusOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteBusOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.busOwner = action.payload;
      })
      .addCase(deleteBusOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleBusOwner.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleBusOwner.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.busOwner = action.payload;
      })
      .addCase(singleBusOwner.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default busOwnerSlice.reducer;
