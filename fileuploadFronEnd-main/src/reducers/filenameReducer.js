import { createSlice } from '@reduxjs/toolkit'
import { eplusappfile} from '../actions/filename';
const initialState = {
  loading: false,
  filename: '',
  //filenames: [],
  error: false,
  success: false,
  message: null,
  isLogin: false,
}
const userSlice = createSlice({
  name: 'filename',
  initialState,
  reducers: {},
  extraReducers: {
    
      [eplusappfile.pending]: (state) => {
        state.loading = true
        state.error = null
      },
      [eplusappfile.fulfilled]: (state, { payload }) => {
        state.loading = false
        state.success = true // send file succefully
        state.error = false
        state.filename = payload
        state.message = payload.message
        console.log("file name Upload succefully");
      },
      [eplusappfile.rejected]: (state, { payload }) => {
        state.loading = false
        state.error = true
        state.message = payload.message
        state.success = false
        console.log("file name upload fail");
      },},
    })
export default userSlice.reducer