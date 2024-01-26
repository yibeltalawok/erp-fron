import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteStation,
  viewStation,
  registerStation,
  updateStation,
  singleStation,
} from "../actions/stationAction";

const stationSlice = createSlice({
  name: "stations",
  initialState: {
    stations: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
      })
      .addCase(viewStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
      })
      .addCase(updateStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
        state.success=true
      })
      .addCase(deleteStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleStation.fulfilled, (state, action) => {
        state.loading = false;
        state.stations = action.payload;
      })
      .addCase(singleStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerStation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerStation.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.stations = action.payload;
      })
      .addCase(registerStation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stationSlice.reducer;
