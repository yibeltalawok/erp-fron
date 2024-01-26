import { createSlice } from '@reduxjs/toolkit'
import { loginUser } from "../actions/usersAction"
// initial state
const initialState = {
    loading: false,
    users:[],
    filter:[],
    user: {},
    error: false,
    success: false,
    message: null,
  }
  
  // users slice
  const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {



  // user login
  [loginUser.pending]: (state) => {
    state.loading = true
    state.error = null
    console.log("user pending");
  },
  [loginUser.fulfilled]: (state, { payload }) => {
    state.loading = false
    state.users = payload
    state.success = true
    state.error = false
    state.message = payload.message
    console.log(payload.users);
  },
  [loginUser.rejected]: (state, { payload }) => {
    state.loading = false
    state.error = true
    state.message = payload.message
    state.success = false
    console.log("user rejected");
  },


    }
})
export default usersSlice.reducer