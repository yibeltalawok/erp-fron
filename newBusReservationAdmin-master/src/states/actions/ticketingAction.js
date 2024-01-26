// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//search single tickets
export const singleTicketing = createAsyncThunk(
  "tickets",
  async (id, thunkAPI) => {
    try {
      let response = await axios.get(`${BaseUrl}/tickets/${id}`);
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

//add new ticketing
export const newTicketing = createAsyncThunk(
  "tickets",
  async (ticketData, thunkAPI) => {
    try {
      console.log("ticketData :", ticketData);
      let response = await axios.post(
        `https://eplus.abyssiniasoftware.com/api/tickets`,
        ticketData
      );
      if (response.status === 201) {
        handleSuccess("save new ticket successfully!");
        return response.data.tickets;
      } else {
        handleError("internal server error");
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

// update current ticketing
export const updateTicketing = createAsyncThunk(
  "ticket",
  async (ticketData, thunkAPI) => {
    try {
      // response
      let response = await axios.put(
        `${BaseUrl}/tickets/${ticketData?.id}`,
        ticketData
      );
      console.log("tickets update data :", response);
      // condition
      if (response.status === 200) {
        handleSuccess("Change successfull!");
        return response.data.tickets;
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
// delete old ticketing
export const deleteTicketing = createAsyncThunk(
  "tickets",
  async (id, thunkAPI) => {
    try {
      let response = await axios.delete(`${BaseUrl}/tickets/${id}`, id);
      if (response.status === 200) {
        handleSuccess("delete successfull !");
        return response.data.tickets;
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

//List all Ticketing
export const viewTicketing = createAsyncThunk("tickets", async (thunkAPI) => {
  try {
    let response = await axios.get(`${BaseUrl}/tickets`);
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
