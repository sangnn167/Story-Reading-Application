import { createSlice } from '@reduxjs/toolkit';

const signupSlice = createSlice({
  name: 'signup',
  initialState: {
    yearold: '',
    name: '',
    password: '',
    email: '',
    loading: false,
  },
  reducers: {
    setYearold: (state, action) => {
      state.yearold = action.payload;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  setYearold,
  setName,
  setPassword,
  setEmail,
  setLoading,
} = signupSlice.actions;

export default signupSlice.reducer;
