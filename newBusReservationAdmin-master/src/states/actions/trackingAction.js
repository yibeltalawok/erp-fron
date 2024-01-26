// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//view all tracking
export const viewTracking = createAsyncThunk("busOwner", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/bus-owners`);
    //condition
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError("loading...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

//search single tracking
export const singleTracking = createAsyncThunk(
  "tracking",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/bus-owners/${id}`);
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError("loading...");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

//Add new tracking
export const addTracking = createAsyncThunk(
  "tracking",
  async (userData, thunkAPI) => {
    try {
      let response = await axios.post(`${BaseUrl}/bus-owners`, userData);
      if (response.status === 201) {
        handleSuccess("add new data successfully!");
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

// update tracking data
export const updateTracking = createAsyncThunk(
  "tracking",
  async (userData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/bus-owners/${userData?.busOwnerId}`,
        userData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.busOwner;
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
// delete tracking action part
export const deleteTracking = createAsyncThunk(
  "tracking",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/bus-owners/${id}`, id);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
        return response.data.busOwner;
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
