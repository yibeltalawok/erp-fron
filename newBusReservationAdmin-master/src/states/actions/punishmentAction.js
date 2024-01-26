// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all punishment
export const viewPunishment = createAsyncThunk(
  "punishments",
  async (thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/punishments`);
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
//Add new punishment
export const registerPunishment = createAsyncThunk(
  "punishment",
  async (userData, thunkAPI) => {
    try {
      //  console.log("new punishment data : ", userData);
      let response = await axios.post(`${BaseUrl}/punishments`, userData);
      if (response.status === 201) {
        handleSuccess("punishment register successfull !");
        return response.data.punishment;
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
// update punishment
export const updatePunishment = createAsyncThunk(
  "punishments",
  async (punishmentData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/punishments/${punishmentData?.id}`,
        punishmentData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("punishment data successfull updated !");
        return response.data.punishment;
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
export const deletePunishment = createAsyncThunk(
  "punishment",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/punishments/${id}`, id);
      if (response.status === 201) {
        handleSuccess("delete successfull !");
        return response.data.punishment;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      // console.log("Error", e.response.data);
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
export const singlePunishment = createAsyncThunk(
  "punishment",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/punishments/${id}`, id);

      if (response.status === 201) {
        return response.data.punishment;
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
