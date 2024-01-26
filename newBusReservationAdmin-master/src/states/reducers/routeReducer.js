import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewRoutes,
  singleRoute,
  newRoutes,
  updateRoute,
  deleteRoute,
} from "../actions/routeAction";

const routeSlice = createSlice({
  name: "routes",
  initialState: {
    routes: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewRoutes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewRoutes.fulfilled, (state, action) => {
        state.loading = false;
        state.routes = action.payload;
      })
      .addCase(viewRoutes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.success=true
        state.routes = action.payload;
      })
      .addCase(updateRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.routes = action.payload;
      })
      .addCase(deleteRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleRoute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleRoute.fulfilled, (state, action) => {
        state.loading = false;
        state.routes = action.payload;
      })
      .addCase(singleRoute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(newRoutes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(newRoutes.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.routes = action.payload;
      })
      .addCase(newRoutes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default routeSlice.reducer;
