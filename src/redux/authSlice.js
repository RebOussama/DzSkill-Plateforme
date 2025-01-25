import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://dzskiils-production.up.railway.app';

export const createTeacher = createAsyncThunk(
    'auth/createTeacher',
    async ({ firstName, lastName, email, password, username }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/teachers/CreateTeacher`, {
          FullName: `${firstName} ${lastName}`,
          email,
          Password: password,
          username: username, // Send username
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );
  
  // Updated Thunks for Student Creation
  export const createStudent = createAsyncThunk(
    'auth/createStudent',
    async ({ firstName, lastName, email, password, username }, { rejectWithValue }) => {
      try {
        const response = await axios.post(`${BASE_URL}/students/CreateStudent`, {
          FullName: `${firstName} ${lastName}`,
          email,
          Password: password,
          username: username, // Send username
        });
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response.data);
      }
    }
  );

  export const login = createAsyncThunk(
    'auth/login',
    async ({ email, password, role }, { rejectWithValue }) => {
      try {
        // Send emailOrUsername as email in the request body
        const response = await axios.post(`${BASE_URL}/teachers/login`, {
          email, 
          password,
          role,
        });
        console.log(response);
        const { token } = response.data; // Assuming the server returns a token
        localStorage.setItem('authToken', token); // Save token to localStorage
        localStorage.setItem('role', role);
        return response.data;
      } catch (error) {
        console.error(error);
        return rejectWithValue(error.response?.data || 'Login failed.');
      }
    }
  );
  

// Slice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loading: false,
    error: null,
    success: false,
    token: localStorage.getItem('authToken') || null, // Load token from localStorage
    role: localStorage.getItem('role') || null, // Load role from localStorage
  },
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
    logout: (state) => {
        state.token = null;
        state.role = null;
        localStorage.removeItem('authToken'); // Remove token from localStorage
        localStorage.removeItem('role'); // Remove role from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      // Login Actions
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.token = action.payload.token; // Store token in Redux state
        state.role = action.meta.arg.role; // Store role in Redux state
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Teacher Actions
      .addCase(createTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createTeacher.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create Student Actions
      .addCase(createStudent.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = false;
      })
      .addCase(createStudent.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(createStudent.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetState, logout } = authSlice.actions;
export default authSlice.reducer;
