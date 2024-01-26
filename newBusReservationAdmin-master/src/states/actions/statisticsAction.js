import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BaseUrl from "../../service/API/base_url";
import { handleSuccess, handleError } from "../../utils/toast";

//search single statstics
export const ViewStatistics = createAsyncThunk("statstics", async (id, thunkAPI) => {
  try {
    let response = await axios.get(`https://eplus.abyssiniasoftware.com/api/statstics`);
    if (response.status === 200) {
      // console.log(response.data)
      return response.data;
    } else {
      handleError(response.message);
      // console.log(response.message)
      return thunkAPI.rejectWithValue(response.data);
    }
  } catch (e) {
    handleError("loading...");
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
