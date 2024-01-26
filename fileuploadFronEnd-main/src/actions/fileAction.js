import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/toast";
export const fileUpload = createAsyncThunk(
  "fileUpload",
  async (formData, thunkAPI) => {
    try {
      let baseUrl = `http://localhost:11278/fileupload-api/files/uploadfile`;
      let response = await axios.post(baseUrl, formData);
      // dispatch(eplusappfile(formData));
   // condition
      if (response.status === 200) {
        handleSuccess("በትክክል ፋይል ልከዋል !");
        return response.data;
      } else {
        handleError(response.message);
        return thunkAPI.rejectWithValue(response.data);
      }
    } catch (e) {
      // console.log("Error", e.response.data);
      handleError(e.response.data.message);
      return thunkAPI.rejectWithValue(e.response.data);
    }});

