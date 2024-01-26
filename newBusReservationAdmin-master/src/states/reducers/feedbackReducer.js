import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  deleteFeedBack,
  viewFeedBack,
  registerFeedback,
  updateFeedBack,
  singleFeedBack,
} from "../actions/feedbackAction";

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedback: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewFeedBack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewFeedBack.fulfilled, (state, action) => {
        state.loading = false;
        state.feedback = action.payload;
      })
      .addCase(viewFeedBack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateFeedBack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateFeedBack.fulfilled, (state, action) => {
        state.loading = false;
        state.feedback = action.payload;
      })
      .addCase(updateFeedBack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteFeedBack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteFeedBack.fulfilled, (state, action) => {
        state.loading = false;
        state.feedback = action.payload;
      })
      .addCase(deleteFeedBack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleFeedBack.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleFeedBack.fulfilled, (state, action) => {
        state.loading = false;
        state.feedback = action.payload;
      })
      .addCase(singleFeedBack.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerFeedback.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerFeedback.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.feedback = action.payload;
      })
      .addCase(registerFeedback.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default feedbackSlice.reducer;
