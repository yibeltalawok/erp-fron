// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all station
export const viewStation = createAsyncThunk("stations", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/stations`);
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

//List all station
export const singleStation = createAsyncThunk(
  "stations",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/stations/${id}`);
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

//Add new station
export const registerStation = createAsyncThunk(
  "stations",
  async (stationata, thunkAPI) => {
    try {
        console.log("station",stationata)
      let response = await axios.post(`${BaseUrl}/stations`, stationata);
      if (response.status === 201) {
        handleSuccess("Register successfully!");
        return response.data.stations;
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

// update station
export const updateStation = createAsyncThunk(
  "stations",
  async (stationData, thunkAPI) => {
    try {
      // response
      console.log("ggg=", stationData);

      let response = await axios.put(
        `${BaseUrl}/stations/${stationData?.stationId}`,
        stationData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.stations;
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
// Search station
export const deleteStation = createAsyncThunk(
  "stations",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/stations/${id}`, id);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
        return response.data.station;
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
