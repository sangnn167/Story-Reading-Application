import { createSlice } from "@reduxjs/toolkit";

export const ReadStories = createSlice({
  name: "stories",
  initialState: {
    selectedCategory:"1",
    filteredStories: [],
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilteredStories: (state, action) => {
      state.filteredStories = action.payload;
    },
  },
});

export const {setSelectedCategory,setFilteredStories} = ReadStories.actions;

export default ReadStories.reducer;
