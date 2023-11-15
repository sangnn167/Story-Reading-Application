import { configureStore } from '@reduxjs/toolkit'
import readstories from './slice/readstories';
import signupReducer from './slice/signupSlice';

export default configureStore({
  reducer: {
    stories: readstories,
    signup: signupReducer,
   
  }
})