import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewMaintenanceSchedule,
  addMaintenanceSchedule,
  singleMaintenanceSchedule,
  updateMaintenance,
  deleteMaintenanceHistory,
} from "../actions/maintenanceAction";

const maintenanceSlice = createSlice({
  name: "maintenance",
  initialState: {
    maintenance: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewMaintenanceSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewMaintenanceSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.maintenance = action.payload;
      })
      .addCase(viewMaintenanceSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateMaintenance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateMaintenance.fulfilled, (state, action) => {
        state.loading = false;
        state.maintenance = action.payload;
      })
      .addCase(updateMaintenance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteMaintenanceHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteMaintenanceHistory.fulfilled, (state, action) => {
        state.loading = false;
        state.maintenance = action.payload;
      })
      .addCase(deleteMaintenanceHistory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleMaintenanceSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleMaintenanceSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.maintenance = action.payload;
      })
      .addCase(singleMaintenanceSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(addMaintenanceSchedule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addMaintenanceSchedule.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.maintenance = action.payload;
      })
      .addCase(addMaintenanceSchedule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default maintenanceSlice.reducer;
