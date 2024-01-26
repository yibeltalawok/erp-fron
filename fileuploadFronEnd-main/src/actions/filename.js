import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { handleSuccess, handleError } from "../utils/toast";
export const eplusappfile = createAsyncThunk(
  "fileData",
  async (formData, thunkAPI) => {

    // for(let [name, value] of formData) {
    //   console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
    // }
  console.log("comming here")
      try {
        let baseUrl = `http://localhost:11278/fileupload-api/eplusapp/create`;
        //Or
        // let baseUrl = `http://localhost:11278/fileupload-api/eplusapp/getAll`;
        let response = await axios.post(baseUrl,formData);
        // condition
        if (response.status === 200) {
         handleSuccess("በትክክል ፋይል ልከዋል !");
          return response.data;
          
        } else {
         handleError(response.message);
          return thunkAPI.rejectWithValue(response.data);
        }
      } catch (e) {
        console.log("Error", e.response.data);
       handleError(e.response.data.message);
        return thunkAPI.rejectWithValue(e.response.data);
      }});


  // export const viewfiles = createAsyncThunk(
  // "files",
  // async (thunkAPI) => {
  //   try {
  //     let URL = `http://localhost:11278/fileupload-api/eplusapp/all`;
      
  //       console.log('view files action');
  //     // let response = await createContact(message);
  //     let response = await axios.get(URL);
  //     if (response.status === 200) {
  //       return response.data;
  //     } else {
  //       handleError(response.message);
  //       return thunkAPI.rejectWithValue(response.data);
  //     }
  //   } catch (e) {
  //     console.log("Error", e.response.data);
  //     handleError("loading...");
  //     return thunkAPI.rejectWithValue(e.response.data);
  //   }});

    export const getYearMonthDay = createAsyncThunk(
      "files",
      async (thunkAPI) => {
        try {
          let URL = `http://localhost:11278/fileupload-api/eplusapp/MonthYear`;
          
            console.log('view files action');
          // let response = await createContact(message);
          let response = await axios.get(URL);
          if (response.status === 200) {
            return response.data;
          } else {
            handleError(response.message);
            return thunkAPI.rejectWithValue(response.data);
          }
        } catch (e) {
          console.log("Error", e.response.data);
          handleError("loading...");
          return thunkAPI.rejectWithValue(e.response.data);
        }});

        export const deleteFile = createAsyncThunk(
          "files",
          async (data, thunkAPI) => {
            
            const id=data.ID;
            const folder=data.folder;
            try {
              let URL = `http://localhost:11278/fileupload-api/eplusapp/${folder}/${id}`;
                console.log('view files action');
              // let response = await createContact(message);
              let response = await axios.delete(URL);
              console.log("delete file :", response);
              if (response.status === 200) {
                return response.data;
              } else {
                handleError(response.message);
                return thunkAPI.rejectWithValue(response.data);
              }
            } catch (e) {
              console.log("Error", e.response.data);
              handleError("loading...");
              return thunkAPI.rejectWithValue(e.response.data);
            }});


        // export const getFileDataByDate = createAsyncThunk(
        //   "files",
        //   async (selectedDate,thunkAPI) => {
        //     console.log(selectedDate);

        //     try {
        //       let URL = `http://localhost:11278/fileupload-api/eplusapp/searchByDate`;
        //         //console.log('view files action');
        //       // let response = await createContact(message);
        //       let response = await axios.get(URL,selectedDate);
        //       console.log(response);
        //       if (response.status === 200) {
        //         return response.data;
        //       } else {
        //         handleError(response.message);
        //         return thunkAPI.rejectWithValue(response.data);
        //       }
        //     } catch (e) {
        //       console.log("Error", e.response.data);
        //       handleError("loading...");
        //       return thunkAPI.rejectWithValue(e.response.data);
        //     }})