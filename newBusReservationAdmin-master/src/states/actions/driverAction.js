// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";
//List all Association
export const viewDriver = createAsyncThunk("driver", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/drivers`);
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
//Add new driver
export const registerDriver = createAsyncThunk(
  "driver",
  async (userData, thunkAPI) => {
    try {
      //response
      // console.log("driver Data : ", userData);
      let response = await axios.post(`${BaseUrl}/drivers`, userData);
      //  console.log("driver Data after registerd: ", response);
      //condition
      if (response.status === 201) {
        handleSuccess("Register successfull!");
        return response.data.driver;
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
//search driver
export const singleDriver = createAsyncThunk("driver", async (id, thunkAPI) => {
  try {
    // response
    let response = await axios.get(`${BaseUrl}/drivers/${id}`);
    if (response.status === 200) {
      return response.data;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError("search maintenance history...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
// update driver
export const updateDriver = createAsyncThunk(
  "drivers",
  async (userData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/drivers/${userData.id}`,
        userData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change save successfull");
        return response.data.driver;
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
// Search driver
export const deleteDriver = createAsyncThunk("driver", async (id, thunkAPI) => {
  try {
    //respone
    let response = await axios.delete(`${BaseUrl}/drivers/${id}`, id);
    //conditoon
    if (response.status === 200) {
      handleSuccess("Delete successfull!");
      return response.data.driver;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError(e.response.data.message);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
