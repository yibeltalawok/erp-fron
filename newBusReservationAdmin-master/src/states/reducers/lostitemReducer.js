import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  viewItem,
  singleItem,
  addItem,
  deleteItem,
  updateItem,
} from "../actions/lostItemAction";

const itemListSlice = createSlice({
  name: "itemList",
  initialState: {
    itemList: [],
    loading: false,
    error: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(viewItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(viewItem.fulfilled, (state, action) => {
        state.loading = false;
        state.itemList = action.payload;
      })
      .addCase(viewItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },

  extraReducers: (builder) => {
    builder
      .addCase(updateItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.loading = false;
        state.itemList = action.payload;
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.loading = false;
        state.itemList = action.payload;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(singleItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(singleItem.fulfilled, (state, action) => {
        state.loading = false;
        state.itemList = action.payload;
      })
      .addCase(singleItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
  extraReducers: (builder) => {
    builder
      .addCase(addItem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addItem.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.itemList = action.payload;
      })
      .addCase(addItem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default itemListSlice.reducer;
