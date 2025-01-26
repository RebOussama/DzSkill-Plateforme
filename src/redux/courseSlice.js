import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base API URL
const BASE_URL = "https://dzskiils-production.up.railway.app";

// Retrieve the token from localStorage
const token = localStorage.getItem("authToken");

// Thunk to fetch all courses
export const fetchAllCourses = createAsyncThunk(
  "courses/fetchAllCourses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/Courses/all`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include Bearer token
        },
      });
      return response.data; // All courses data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch courses"
      );
    }
  }
);

// Thunk to fetch all categories
export const fetchCategories = createAsyncThunk(
  "courses/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/categories/all`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include Bearer token
        },
      });
      return response.data; // Categories data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch categories"
      );
    }
  }
);

// Thunk to fetch a category by ID (using POST method)
export const fetchCategoryById = createAsyncThunk(
  "courses/fetchCategoryById",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${BASE_URL}/categories/get/${categoryId}`, // POST request
        { category_id: categoryId }, // Pass the category_id in the body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Include Bearer token
          },
        }
      );
      return response.data; // Category data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch category"
      );
    }
  }
);

// Thunk to upload image to Cloudinary
export const uploadImageToCloudinary = createAsyncThunk(
  "courses/uploadImageToCloudinary",
  async (image, { rejectWithValue }) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "images"); // Add your upload preset here

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dsmmsbdeh/image/upload",
        formData
      );
      return response.data; // Image data
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to upload image"
      );
    }
  }
);

// Thunk to create a course
export const createCourse = createAsyncThunk(
  "courses/createCourse",
  async (courseData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/Courses/createCourse`, courseData, {
        headers: {
          "Content-Type": "application/json", // Using JSON format for course data
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to create the course"
      );
    }
  }
);

// Thunk to delete a course
export const deleteCourse = createAsyncThunk(
  "courses/deleteCourse",
  async (courseId, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${BASE_URL}/Courses/DeleteCourse/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`, // Include Bearer token
        },
      });
      return courseId; // Return the course ID that was deleted
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to delete course"
      );
    }
  }
);

// Initial state
const initialState = {
  loading: false,
  successMessage: null,
  errorMessage: null,
  courses: [], // Store courses
  categories: {}, // Store categories by their ID
  categoriesList: [], // Store all categories
  imageUrl: null, // Store the image URL
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    resetStatus: (state) => {
      state.loading = false;
      state.successMessage = null;
      state.errorMessage = null;
      state.imageUrl = null; // Reset image URL
    },
  },
  extraReducers: (builder) => {
    builder
      // Handle fetchAllCourses
      .addCase(fetchAllCourses.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchAllCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload; // Store the fetched courses
      })
      .addCase(fetchAllCourses.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to fetch courses";
      })
      // Handle fetchCategories
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload; // Store all categories
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to fetch categories";
      })
      // Handle fetchCategoryById
      .addCase(fetchCategoryById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoryById.fulfilled, (state, action) => {
        state.loading = false;
        // Store category by ID
        state.categories[action.payload.ID] = action.payload;
      })
      .addCase(fetchCategoryById.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to fetch category";
      })
      // Handle uploadImageToCloudinary
      .addCase(uploadImageToCloudinary.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(uploadImageToCloudinary.fulfilled, (state, action) => {
        state.loading = false;
        state.imageUrl = action.payload.secure_url; // Store the image URL
      })
      .addCase(uploadImageToCloudinary.rejected, (state, action) => {
        state.loading = false;
        state.imageUrl = null;
        state.errorMessage = action.payload || "Failed to upload image.";
      })
      // Handle createCourse
      .addCase(createCourse.pending, (state) => {
        state.loading = true;
        state.successMessage = null;
        state.errorMessage = null;
      })
      .addCase(createCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = "Course created successfully!";
        state.errorMessage = null;
      })
      .addCase(createCourse.rejected, (state, action) => {
        state.loading = false;
        state.successMessage = null;
        state.errorMessage = action.payload || "Failed to create the course.";
      })
      // Handle deleteCourse
      .addCase(deleteCourse.pending, (state) => {
        state.loading = true;
        state.errorMessage = null;
      })
      .addCase(deleteCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = state.courses.filter(course => course.id !== action.payload); // Remove the deleted course
        state.successMessage = "Course deleted successfully!";
      })
      .addCase(deleteCourse.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload || "Failed to delete course";
      });
  },
});

export const { resetStatus } = courseSlice.actions;
export default courseSlice.reducer;
