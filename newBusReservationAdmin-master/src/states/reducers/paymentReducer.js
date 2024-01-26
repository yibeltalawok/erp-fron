import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deletePayment,
  viewPayment,
  registerPayment,
  updatePayment,
  singlePayment,
} from "../actions/paymentAction";
const paymentSlice = createSlice({
  name: "payments",
  initialState: {
    payments: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(viewPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updatePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(updatePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(deletePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singlePayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singlePayment.fulfilled, (state, action) => {
        state.loading = false;
        state.payments = action.payload;
      })
      .addCase(singlePayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerPayment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.payments = action.payload;
      })
      .addCase(registerPayment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default paymentSlice.reducer;
