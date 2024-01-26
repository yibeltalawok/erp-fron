//  // config
// import { configureStore } from '@reduxjs/toolkit'

// // reducers
// import fileReducer from '../reducers/fileReducer'
// import filenameReducer from '../reducers/filenameReducer'
// import  userReducer  from '../reducers/userReducer'

// store
// const store = configureStore({
//   // reducer
//   reducer: {
//     files: fileReducer,
//     filename: filenameReducer,
//     users: userReducer
//   }
// })

// // export
// export default store

import fileReducer from '../reducers/fileReducer'
import filenameReducer from '../reducers/filenameReducer'
import  userReducer  from '../reducers/userReducer'
import {configureStore} from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import {combineReducers} from "redux"; 
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'
const reducers = combineReducers({
       files: fileReducer,
        filename: filenameReducer,
         users: userReducer
          });

          const persistConfig = {
            key: 'root',
            storage
          };

      const persistedReducer = persistReducer(persistConfig, reducers); 
      const store = configureStore({
      reducer: persistedReducer,
      devTools: process.env.NODE_ENV !== 'production',
      middleware: [thunk]
     });
export default store;
