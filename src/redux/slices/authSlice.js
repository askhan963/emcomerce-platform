import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

// Set base URL for axios to target the server at http://localhost:5000
axios.defaults.baseURL = 'http://localhost:5000';

export const login = createAsyncThunk('auth/login', async (credentials) => {
  try {
    const response = await axios.post('/api/auth/login', credentials);
    const token = response.data.token;
    const user = jwtDecode(token);
    localStorage.setItem('token', token);
    return user;
  } catch (error) {
    throw error.response.data;
  }
});

export const signup = createAsyncThunk('auth/signup', async (credentials) => {
  try {
    const response = await axios.post('/api/auth/signup', credentials);
    const token = response.data.token;
    const user = jwtDecode(token);
    localStorage.setItem('token', token);
    return user;
  } catch (error) {
    throw error.response.data;
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem('token');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(signup.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
