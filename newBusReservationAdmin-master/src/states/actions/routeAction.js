// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//search single routes
export const singleRoute = createAsyncThunk("routes", async (id, thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/terminals/${id}`);
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

//add new routes
export const newRoutes = createAsyncThunk(
  "routes",
  async (routeData, thunkAPI) => {
    try {
      let response = await axios.post(`${BaseUrl}/terminals`, routeData);
      if (response.status === 201) {
        handleSuccess("new route saved successfully!");
        return response.data.routes;
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

// update current routes
export const updateRoute = createAsyncThunk(
  "route",
  async (routeData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/terminals/${routeData?.id}`,
        routeData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.routes;
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
// delete old route
export const deleteRoute = createAsyncThunk("routes", async (id, thunkAPI) => {
  try {
    let response = await axios.delete(`${BaseUrl}/terminals/${id}`, id);
    if (response.status === 200) {
      handleSuccess("delete successfull !");
      return response.data.routes;
    } else {
      handleError(response.message);
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError(e.response.data.message);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});

//List all Routes
export const viewRoutes = createAsyncThunk("routes", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/terminals`);
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
