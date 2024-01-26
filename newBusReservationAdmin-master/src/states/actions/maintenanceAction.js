// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

// view all Maintenance
export const viewMaintenanceSchedule = createAsyncThunk(
  "maintenance",
  async (thunkAPI) => {
    try {
      console.log("maintenance action page");
      let response = await axios.get(`${BaseUrl}/maintenance`);
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
export const singleMaintenanceSchedule = createAsyncThunk(
  "maintenance",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/maintenance/${id}`, id);
      if (response.status === 201) {
        return response.data.busMaintenance;
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
// add new Maintenance Schedule
export const addMaintenanceSchedule = createAsyncThunk(
  "maintenance",
  async (maintainanceData, thunkAPI) => {
    try {
      //resopne
      let response = await axios.post(
        `${BaseUrl}/maintenance`,
        maintainanceData
      );
      if (response.status === 201) {
        handleSuccess("add maintenance data successfull !");
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
// delete Maintenance
export const deleteMaintenanceHistory = createAsyncThunk(
  "maintainance",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/maintenance/${id}`, id);
      if (response.status === 200) {
        handleSuccess("maintenance history deleted successfuly!");
        return response.data.maintainance;
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

export const updateMaintenance = createAsyncThunk(
  "maintainance",
  async (maintainanceData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/maintenance/${maintainanceData?.maintenanceId}`,
        maintainanceData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("update successfull !");
        return response.data.busMaintenance;
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
