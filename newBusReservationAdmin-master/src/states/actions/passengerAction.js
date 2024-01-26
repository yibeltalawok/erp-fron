// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all passenger
export const viewPassenger = createAsyncThunk("passenger", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/passengers`);
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

//List all passenger
export const singlePassenger = createAsyncThunk(
  "passenger",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/passengers/${id}`);
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

//Add new passenger
export const registerPassenger = createAsyncThunk(
  "passenger",
  async (userData, thunkAPI) => {
    try {
      let response = await axios.post(`${BaseUrl}/passengers`, userData);
      if (response.status === 201) {
        handleSuccess("Register successfully!");
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

// update passenger
export const updatePassenger = createAsyncThunk(
  "passengers",
  async (userData, thunkAPI) => {
    try {
      // response
      console.log("ggg=", userData);

      let response = await axios.put(
        `${BaseUrl}/passengers/${userData?.id}`,
        userData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.passenger;
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
// Search passeger
export const deletePassenger = createAsyncThunk(
  "passenger",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/passengers/${id}`, id);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
        return response.data.passenger;
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
