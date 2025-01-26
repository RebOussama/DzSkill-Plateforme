// src/redux/studentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Base URL for API calls (replace with your actual backend URL)
const BASE_URL = 'http://your-backend-url.com/api';

// Async Thunks for Student Operations
export const createStudent = createAsyncThunk(
  'students/createStudent',
  async (studentData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/students`, studentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getStudent = createAsyncThunk(
  'students/getStudent',
  async (studentId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/students/GetStudent/${studentId}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateStudent = createAsyncThunk(
  'students/updateStudent',
  async ({ id, ...studentData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/students/${id}`, studentData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Student Slice
const studentSlice = createSlice({
  name: 'students',
  initialState: {
    currentStudent: null,
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Create Student
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStudent = action.payload;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Get Student
      .addCase(getStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStudent = action.payload;
      })
      .addCase(getStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      // Update Student
      .addCase(updateStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateStudent.fulfilled, (state, action) => {
        state.loading = false;
        state.currentStudent = action.payload;
      })
      .addCase(updateStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default studentSlice.reducer;

// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './studentSlice';

export const store = configureStore({
  reducer: {
    students: studentReducer
  }
});