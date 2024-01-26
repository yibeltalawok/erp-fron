import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewAssignation,
  singleAssignation,
  registerAssignation,
  updateAssignation,
  deleteassignation,
} from "../actions/assignationAction";

const assignationSlice = createSlice({
  name: "assignation",
  initialState: {
    assignation: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewAssignation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewAssignation.fulfilled, (state, action) => {
        state.loading = false;
        state.assignation = action.payload;
      })
      .addCase(viewAssignation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateAssignation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateAssignation.fulfilled, (state, action) => {
        state.loading = false;
        state.assignation = action.payload;
      })
      .addCase(updateAssignation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteassignation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteassignation.fulfilled, (state, action) => {
        state.loading = false;
        state.assignation = action.payload;
      })
      .addCase(deleteassignation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleAssignation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleAssignation.fulfilled, (state, action) => {
        state.loading = false;
        state.assignation = action.payload;
      })
      .addCase(singleAssignation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAssignation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerAssignation.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.assignation = action.payload;
        //console.log("ass-=",action.payload)
      })
      .addCase(registerAssignation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default assignationSlice.reducer;
