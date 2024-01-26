// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all bus owner
export const viewBusOwner = createAsyncThunk("busOwner", async (thunkAPI) => {
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

//List all bus owner
export const singleBusOwner = createAsyncThunk(
  "busOwner",
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

//Add new bus owner
export const registerBusOwner = createAsyncThunk(
  "busOwner",
  async (userData, thunkAPI) => {
    try {
      // console.log("bo==",userData)
      let response = await axios.post(`${BaseUrl}/bus-owners`, userData);
      if (response.status === 201) {
        handleSuccess("Register successfully!");
        return response.data.busOwner;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError("internal server error");
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// update bus owner
export const updateBusOwner = createAsyncThunk(
  "owner",
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
// Search bus owner
export const deleteBusOwner = createAsyncThunk(
  "busOwner",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/bus-owners/${id}`, id);
      if (response.status === 201) {
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
