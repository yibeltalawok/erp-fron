// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

// view all Items
export const viewItem = createAsyncThunk("itemList", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/materials`);
    // console.log(response);
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    handleError("loading...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const singleItem = createAsyncThunk("itemList", async (id, thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/materials/${id}`, id);
    if (response.status === 201) {
      return response.data.busMaintenance;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError("loading...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
// add new Item Schedule
export const addItem = createAsyncThunk(
  "itemList",
  async (itemData, thunkAPI) => {
    //console.log("action page item data :", itemData);
    try {
      let response = await axios.post(`${BaseUrl}/materials`, itemData);
      if (response.status === 201) {
        handleSuccess(" item added successfull!");
        return response.data.users;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
// delete item
export const deleteItem = createAsyncThunk("itemList", async (id, thunkAPI) => {
  try {
    let baseUrl = `${BaseUrl}/materials/${id}`;
    let response = await axios.delete(baseUrl, id);
    if (response.status === 200) {
      handleSuccess("Delete item successfull!");
      return response.data.itemData;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError(e.response.data.message);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

export const updateItem = createAsyncThunk(
  "item",
  async (itemData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/materials/${itemData?.materialId}`,
        itemData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("change saved");
        return response.data.itemList;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
