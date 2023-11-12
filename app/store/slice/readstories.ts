import { createSlice } from "@reduxjs/toolkit";

export const ReadStories = createSlice({
  name: "stories",
  initialState: {
    selectedCategory:"1",
    filteredStories: [],
    searchKeyword: "",
    loading:true,
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
    setLoading: (state, action) => {
      state.loading = action.payload
    },
    setSelectedTabIndex: (state,action) =>{
      state.selectedTabIndex = action.payload
    }
  },
});

export const {setSelectedCategory,setFilteredStories,setSearchKeyword,setLoading,setSelectedTabIndex} = ReadStories.actions;

export default ReadStories.reducer;
