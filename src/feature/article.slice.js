import { createSlice } from "@reduxjs/toolkit";

const articleSlice = createSlice({
  name: "article",
  initialState: {
    data: [],
    viewArticle: [],
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setViewArticle: (state, action) => {
      state.viewArticle = state.data.find((x) => x.slug === action.payload);
    },
  },
});

export const { setData, setViewArticle } = articleSlice.actions;
export default articleSlice.reducer;
