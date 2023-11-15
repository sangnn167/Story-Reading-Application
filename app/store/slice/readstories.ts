import { createSlice } from "@reduxjs/toolkit";
import storiesData from "@/app/data/stories";
export const ReadStories = createSlice({
  name: "stories",
  initialState: {
    selectedCategory:"1",
    filteredStories: storiesData.slice(0, 8),
    searchKeyword: "",
    selectedTabIndex: 0,
  },
  reducers: {
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setFilteredStories: (state, action) => {
      state.filteredStories = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setSelectedTabIndex: (state,action) =>{
      state.selectedTabIndex = action.payload
    }
  },
});

export const {setSelectedCategory,setFilteredStories,setSearchKeyword,setSelectedTabIndex} = ReadStories.actions;

export default ReadStories.reducer;
