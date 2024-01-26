// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all Assignation
export const viewAssignation = createAsyncThunk(
  "assignation",
  async (thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/assignations`);
      if (response.status === 200) {
        console.log(response.data);

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
//Add new Assignation
export const registerAssignation = createAsyncThunk(
  "assignation",
  async (userData, thunkAPI) => {
    try {
      //  console.log("action of assignation==", userData);
      let response = await axios.post(`${BaseUrl}/assignations`, userData);
      if (response.status === 201) {
        handleSuccess("Assignation register successfull !");
        return response.data.assignation;
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
// update Assignation
export const updateAssignation = createAsyncThunk(
  "assignation",
  async (assignationData, thunkAPI) => {
    try {
      // response
      console.log(assignationData?.id, ",", assignationData);
      let response = await axios.put(
        `${BaseUrl}/assignations/${assignationData?.id}`,
        assignationData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Assignation data successfull updated !");
        return response.data.assignation;
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
export const deleteassignation = createAsyncThunk(
  "assignation",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/assignations/${id}`, id);
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
export const singleAssignation = createAsyncThunk(
  "assignation",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/assignations/${id}`, id);
      if (response.status === 201) {
        return response.data.assignation;
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
