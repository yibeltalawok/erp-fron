// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";
//List all Association
export const viewEmployee = createAsyncThunk("employee", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/users`);
    console.log("employee Data : ", response);
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
//Add new Employee
export const registerEmployee = createAsyncThunk(
  "employee",
  async (userData, thunkAPI) => {
    try {
      //response
      let response = await axios.post(`${BaseUrl}/users`, userData);

      //condition
      if (response.status === 201) {
        handleSuccess("Register successfull!");
        return response.data.employee;
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
//search Maintenance
export const singleEmployee = createAsyncThunk(
  "employee",
  async (id, thunkAPI) => {
    try {
      // response
      let response = await axios.get(`${BaseUrl}/users/${id}`, id);
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
  }
);
// update Employee
export const updateEmployee = createAsyncThunk(
  "employees",
  async (userData, thunkAPI) => {
    try {
      // response
      console.log("data : ", userData);
      let response = await axios.put(
        `${BaseUrl}/users/${userData.id}`,
        userData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change save successfull");
        return response.data.employee;
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
// Search Employee
export const deleteEmployee = createAsyncThunk(
  "employees",
  async (id, thunkAPI) => {
    try {
      //respone
      let response = await axios.delete(`${BaseUrl}/users/${id}`, id);
      //conditoon
      if (response.status === 200) {
        handleSuccess("Delete successfull!");
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
//login users
export const loginUser = createAsyncThunk(
  "user",
  async (authData, thunkAPI) => {
    try {
      // base url
      let baseUrl = "https://eplus.abyssiniasoftware.com/api/login";
      // response
      let response = await axios.post(baseUrl, authData);
      console.log("userData", response);
      // condition
      if (response.status === 200) {
        localStorage.setItem("userInfo", JSON.stringify(response.data));

        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      console.log(e.response);

      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);
