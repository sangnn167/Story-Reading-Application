import { configureStore } from '@reduxjs/toolkit'
import readstories from './slice/readstories';

export default configureStore({
  reducer: {
    stories: readstories
  }
})