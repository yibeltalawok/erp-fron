// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//List all feed back
export const viewFeedBack = createAsyncThunk("feedback", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/feedbacks`);
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

//List all feed back
export const singleFeedBack = createAsyncThunk(
  "feedback",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/feedbacks/${id}`);
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

//Add new feed back
export const registerFeedback = createAsyncThunk(
  "feedback",
  async (userData, thunkAPI) => {
    try {
      // console.log("comment=",userData)
      let response = await axios.post(`${BaseUrl}/feedbacks`, userData);
      if (response.status === 201) {
        handleSuccess("Register successfully!");
        return response.data.feedback;
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

// update feed back
export const updateFeedBack = createAsyncThunk(
  "feedback",
  async (userData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/feedbacks/${userData?.feedbackId}`,
        userData
      );
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.feedback;
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
// Search feed back
export const deleteFeedBack = createAsyncThunk(
  "feedback",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/feedbacks/${id}`, id);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
        return response.data.feedback;
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
