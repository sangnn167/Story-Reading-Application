import { createSlice } from "@reduxjs/toolkit";

export const ReadStories = createSlice({
  name: "stories",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
   
  },
});

export const { setSearchTerm} = ReadStories.actions;

export default ReadStories.reducer;
