import { createSlice } from '@reduxjs/toolkit'
import { fileUpload  } from '../actions/fileAction';
// import { viewfiles   } from '../actions/filename';
import { getYearMonthDay,deleteFile} from '../actions/filename';

const initialState = {
    loading: false,
    file: {},
    files: [],
    error: false,
    success: false,
    message: null,
    isLogin: false,
}
const userSlice = createSlice({
  name:'files',
  initialState,
  reducers: {},
  extraReducers: {
    // uploadfiles
    [fileUpload.pending]: (state) => {
      state.loading = true
      state.error = null     
    },
    [fileUpload.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // send file succefully
      state.error = false
      state.files = payload
      state.message = payload.message
      console.log("filemen is:",payload);

    },
    [fileUpload.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = true
      state.message = payload.message
      state.success = false
      console.log("uploadfile fial");
    },

    // [viewfiles.pending]: (state) => {
    //   state.loading = true
    //   state.error = null
    // },
    // [viewfiles.fulfilled]: (state, { payload }) => {
    //   state.loading = false
    //   state.success = true
    //   state.error = false
    //   state.files = payload
    // },
    // [viewfiles.rejected]: (state, { payload }) => {
    //   state.loading = false 
    //   state.error = true 
    //   state.message = payload.message
    //   state.success = false
    //   state.files = false
    // },

    
    
    
    [getYearMonthDay.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getYearMonthDay.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true
      state.error = false
      state.files = payload
      console.log("yibe file filemen=:",payload);
    },
    [getYearMonthDay.rejected]: (state, { payload }) => {
      state.loading = false 
      state.error = true 
      state.message = payload.message
      state.success = false
      state.files = false
    },


    // [deleteFile.pending]: (state) => {
    //   state.loading = true
    //   state.error = null
    // },
    // [deleteFile.fulfilled]: (state, { payload }) => {
    //   state.loading = false
    //   state.success = true
    //   state.error = false
    //   state.files = payload
    //   console.log("yibe file filemen=:",payload);
    // },
    // [deleteFile.rejected]: (state, { payload }) => {
    //   state.loading = false 
    //   state.error = true 
    //   state.message = payload.message
    //   state.success = false
    //   state.files = false
    //   },
    
    // [getFileDataByDate.pending]: (dateState) => {
    //   dateState.loading = true
    //   dateState.error = null
    // },
    // [getFileDataByDate.fulfilled]: (dateState, { payload }) => {
    //   dateState.loading = false
    //   dateState.success = true
    //   dateState.error = false
    //   dateState.files = payload
    //   console.log("yibe filemen=:",payload);
    // },
    // [getFileDataByDate.rejected]: (dateState, { payload }) => {
    //   dateState.loading = false 
    //   dateState.error = true 
    //   dateState.message = payload.message
    //   dateState.success = false
    //   dateState.files = false
    // },

  },
})
export default userSlice.reducer