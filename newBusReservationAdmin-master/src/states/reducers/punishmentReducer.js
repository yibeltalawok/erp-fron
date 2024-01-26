import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewPunishment,
  singlePunishment,
  registerPunishment,
  updatePunishment,
  deletePunishment,
} from "../actions/punishmentAction";

const punishmentSlice = createSlice({
  name: "punishment",
  initialState: {
    punishment: [],
    loading: false,
    error: null,
    success: false,
    punishment: {},
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(updatePunishment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePunishment.fulfilled, (state, action) => {
        state.loading = false;
        state.punishment = action.payload;
      })
      .addCase(updatePunishment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deletePunishment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePunishment.fulfilled, (state, action) => {
        state.loading = false;
        state.punishment = action.payload;
      })
      .addCase(deletePunishment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singlePunishment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singlePunishment.fulfilled, (state, action) => {
        state.loading = false;
        state.punishment = action.payload;
        console.log("panishmen ");
      })
      .addCase(singlePunishment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerPunishment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerPunishment.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.punishment = action.payload;
      })
      .addCase(registerPunishment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(viewPunishment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewPunishment.fulfilled, (state, action) => {
        state.loading = false;
        state.punishment = action.payload;
      })
      .addCase(viewPunishment.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default punishmentSlice.reducer;
