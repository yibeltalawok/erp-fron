import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewAssociation,
  singleAssociation,
  registerAssociation,
  updateAssociation,
  deleteAssociation,
} from "../actions/associationAction";

const associationSlice = createSlice({
  name: "association",
  initialState: {
    association: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewAssociation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewAssociation.fulfilled, (state, action) => {
        state.loading = false;
        state.association = action.payload;
      })
      .addCase(viewAssociation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateAssociation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAssociation.fulfilled, (state, action) => {
        state.loading = false;
        state.association = action.payload;
      })
      .addCase(updateAssociation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteAssociation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAssociation.fulfilled, (state, action) => {
        state.loading = false;
        state.association = action.payload;
      })
      .addCase(deleteAssociation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleAssociation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleAssociation.fulfilled, (state, action) => {
        state.loading = false;
        state.association = action.payload;
      })
      .addCase(singleAssociation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAssociation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAssociation.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.association = action.payload;
      })
      .addCase(registerAssociation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default associationSlice.reducer;
