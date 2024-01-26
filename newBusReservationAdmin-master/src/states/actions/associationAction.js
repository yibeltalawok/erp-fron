// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all Association
export const viewAssociation = createAsyncThunk(
  "association",
  async (thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/associations`);
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
//Add new Association
export const registerAssociation = createAsyncThunk(
  "association",
  async (userData, thunkAPI) => {
    try {
      let response = await axios.post(`${BaseUrl}/associations`, userData);
      if (response.status === 201) {
        handleSuccess("association add successfull !");
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
// update Association
export const updateAssociation = createAsyncThunk(
  "Association",
  async (associationData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/associations/${associationData?.associationId}`,
        associationData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("association data successfuly updated !");
        return response.data.association;
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
// Search Association
export const deleteAssociation = createAsyncThunk(
  "association",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/associations/${id}`, id);
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
export const singleAssociation = createAsyncThunk(
  "association",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/associations/${id}`, id);
      if (response.status === 201) {
        return response.data.association;
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
