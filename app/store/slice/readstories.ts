import { createSlice } from "@reduxjs/toolkit";
import storiesData from "@/app/Mock/stories";
export const ReadStories = createSlice({
  name: "stories",
  initialState: {
    filteredStories: storiesData.slice(0, 8),
    searchKeyword: "",
    selectedTabIndex: 0,
    suggestions: [],
    showSuggestions: true,
    currentSearchTerm: '',
    historyStories: storiesData.filter((story) => story.history),
    
  },
  reducers: {
    
    setFilteredStories: (state, action) => {
      state.filteredStories = action.payload;
    },
    setSearchKeyword: (state, action) => {
      state.searchKeyword = action.payload;
    },
    setSelectedTabIndex: (state,action) =>{
      state.selectedTabIndex = action.payload
    },
    setSuggestions: (state, action) => {
      state.suggestions = action.payload;
    },
    setShowSuggestions: (state, action) => {
      state.showSuggestions = action.payload;
    },
    setCurrentSearchTerm: (state, action) => {
      state.currentSearchTerm = action.payload;
    },
    setHistoryStories(state, action) {
      state.historyStories = action.payload;
    },
    deleteHistoryStory(state, action) {
      const storyId = action.payload;
      state.historyStories = state.historyStories.filter((story:any) => story.id !== storyId);
    },
  },
});

export const {setFilteredStories,setSearchKeyword,setSelectedTabIndex,setSuggestions,setShowSuggestions,setCurrentSearchTerm,setHistoryStories, deleteHistoryStory} = ReadStories.actions;

export default ReadStories.reducer;
