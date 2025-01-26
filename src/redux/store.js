
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice.js';
import profileReducer from './studentSlice.js';  // Import the profile reducer

const store = configureStore({
  reducer: {
    auth: authReducer,
    students: profileReducer,  // Add the profile reducer here
  },
});

export default store;
