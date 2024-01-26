import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deletePassenger,
  viewPassenger,
  registerPassenger,
  updatePassenger,
  singlePassenger,
} from "../actions/passengerAction";

const passegerSlice = createSlice({
  name: "passenger",
  initialState: {
    passenger: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewPassenger.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewPassenger.fulfilled, (state, action) => {
        state.loading = false;
        state.passenger = action.payload;
      })
      .addCase(viewPassenger.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updatePassenger.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePassenger.fulfilled, (state, action) => {
        state.loading = false;
        state.passenger = action.payload;
      })
      .addCase(updatePassenger.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePassenger.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePassenger.fulfilled, (state, action) => {
        state.loading = false;
        state.passenger = action.payload;
      })
      .addCase(deletePassenger.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singlePassenger.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singlePassenger.fulfilled, (state, action) => {
        state.loading = false;
        state.passenger = action.payload;
      })
      .addCase(singlePassenger.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPassenger.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerPassenger.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.passenger = action.payload;
      })
      .addCase(registerPassenger.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default passegerSlice.reducer;
