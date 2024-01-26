// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

// view all Communication
export const viewCommunication = createAsyncThunk(
  "communication",
  async (thunkAPI) => {
    try {
      //response
      let response = await axios.get(`${BaseUrl}/communication`);
      // condition
      if (response.status === 200) {
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
// get single communication
export const singleCommunication = createAsyncThunk(
  "communication",
  async (id, thunkAPI) => {
    try {
      //response
      let response = await axios.get(`${BaseUrl}/communication/${id}`, id);
      //condition
      if (response.status === 201) {
        return response.data.communications;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
// send messages
export const sendMessage = createAsyncThunk(
  "communication",
  async (communicationData, thunkAPI) => {
    try {
      //response
      let response = await axios.post(`${BaseUrl}/messages`, communicationData);
      //condition
      if (response.status === 201) {
        handleSuccess("Send message successfull !");
        return response.data;
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
// delete Communication
export const deleteCommunication = createAsyncThunk(
  "communication",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/communication/${id}`, id);
      if (response.status === 201) {
        handleSuccess("delete message successfull !");
        return response.data.communications;
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
// update current message
export const updateCommunication = createAsyncThunk(
  "communication",
  async (communicationData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/communication/${communicationData?.communicationId}`,
        communicationData
      );
      // condition
      if (response.status === 201) {
        return response.data.communications;
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
