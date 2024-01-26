import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteCommunication,
  updateCommunication,
  singleCommunication,
  viewCommunication,
  sendMessage,
} from "../actions/communicationAction";

const communicationSlice = createSlice({
  name: "communication",
  initialState: {
    communication: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewCommunication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewCommunication.fulfilled, (state, action) => {
        state.loading = false;
        state.communication = action.payload;
      })
      .addCase(viewCommunication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.communication = action.payload;
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateCommunication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCommunication.fulfilled, (state, action) => {
        state.loading = false;
        state.communication = action.payload;
      })
      .addCase(updateCommunication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteCommunication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCommunication.fulfilled, (state, action) => {
        state.loading = false;
        state.communication = action.payload;
      })
      .addCase(deleteCommunication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleCommunication.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleCommunication.fulfilled, (state, action) => {
        state.loading = false;
        state.communication = action.payload;
      })
      .addCase(singleCommunication.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default communicationSlice.reducer;
