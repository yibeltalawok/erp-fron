// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all accident
export const viewAccident = createAsyncThunk("accident", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/accidents`);
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
//Add new accident
export const registerAccident = createAsyncThunk(
  "accidents",
  async (accidentData, thunkAPI) => {
    try {
      console.log("Accident Data :", accidentData);
      let response = await axios.post(`${BaseUrl}/accidents`, accidentData);
      if (response.status === 201) {
        handleSuccess("accident register successfull !");
        return response.data.accident;
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
// update accident
export const updateAccident = createAsyncThunk(
  "accidents",
  async (accidentData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/accidents/${accidentData?.id}`,
        accidentData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("accident data successfull updated !");
        return response.data.accident;
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
// Search assignatioA
export const deleteAccident = createAsyncThunk(
  "acciden",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/accidents/${id}`);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
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
  }
);
export const singleAccident = createAsyncThunk(
  "accident",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/accidents/${id}`, id);
      if (response.status === 201) {
        return response.data.accident;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
