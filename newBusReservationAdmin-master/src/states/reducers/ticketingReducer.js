import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewTicketing,
  singleTicketing,
  deleteTicketing,
  updateTicketing,
  newTicketing,
} from "../actions/ticketingAction";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    tickets: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(updateTicketing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTicketing.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(updateTicketing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteTicketing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTicketing.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(deleteTicketing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleTicketing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleTicketing.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(singleTicketing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewTicketing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewTicketing.fulfilled, (state, action) => {
        state.loading = false;
        state.tickets = action.payload;
      })
      .addCase(viewTicketing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(newTicketing.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(newTicketing.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.tickets = action.payload;
      })
      .addCase(newTicketing.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default ticketsSlice.reducer;
