// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all Payment
export const viewPayment = createAsyncThunk("payments", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/servicePayments`);
    //condition
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
});

//List all Payment
export const singlePayment = createAsyncThunk(
  "payments",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/servicePayments/${id}`);
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

//Add new Payment
export const registerPayment = createAsyncThunk(
  "payments",
  async (userData, thunkAPI) => {
    try {
      // console.log("payment action==",userData)
      let response = await axios.post(`${BaseUrl}/servicePayments`, userData);
      if (response.status === 201) {
        handleSuccess("Register successfully!");
        return response.data.payments;
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
// update Payment
export const updatePayment = createAsyncThunk(
  "payment",
  async (userData, thunkAPI) => {
    try {
      console.log("assign updActon==", userData);
      // response
      let response = await axios.put(
        `https://eplus.abyssiniasoftware.com/api/servicePayments/${userData?.id}`,
        userData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.payments;
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
// Search passeger
export const deletePayment = createAsyncThunk(
  "payments",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/servicePayments/${id}`, id);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
        return response.data.payment;
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
