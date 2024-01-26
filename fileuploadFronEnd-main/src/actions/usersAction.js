
// reduxjs toolkit
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { handleSuccess, handleError } from "../utils/toast";

//login users
export const loginUser = createAsyncThunk(
    "users",
    async (authData, thunkAPI) => {
      try {
        // base url
        console.log(authData);
        let baseUrl = "https://address-backend.eplusapp.et/addressapi/users/login";
  
        // response
        let response = await axios.post(baseUrl, authData);
       console.log('user loginfo',response)
        // condition
        if (response.status === 200) {
  
          // handleSuccess(response.data.message);
          // put the user info into local storage
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