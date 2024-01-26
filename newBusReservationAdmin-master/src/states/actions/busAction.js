import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";
//List all bus
export const viewBus = createAsyncThunk("buses", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/buses`);
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
export const registerBus = createAsyncThunk(
  "buses",
  async (busData, thunkAPI) => {
    try {
      console.log("bu==", busData);
      let response = await axios.post(`${BaseUrl}/buses`, busData);
      // condition
      if (response.status === 201) {
        handleSuccess("Register successfull!");
        return response.data.buses;
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

//search Maintenance
export const singleBus = createAsyncThunk("buses", async (id, thunkAPI) => {
  try {
    // response
    let response = await axios.get(`${BaseUrl}/buses/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError("search bus ...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
// update Bus
export const updateBus = createAsyncThunk(
  "buses",
  async (busData, thunkAPI) => {
    try {
      console.log("all data :", busData);
      // response
      let response = await axios.put(`${BaseUrl}/buses/${busData.id}`, busData);
      // condition
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.buses;
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
// Search Bus
export const deleteBus = createAsyncThunk("buses", async (id, thunkAPI) => {
  try {
    let response = await axios.delete(`${BaseUrl}/buses/${id}`, id);
    if (response.status === 201) {
      handleSuccess("Delete successfull!");
      return response.data.users;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    handleError(e.response.data.message);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
