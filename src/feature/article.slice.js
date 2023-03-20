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
      const findArticle = state.data.find((x) => x.slug === action.payload);
      if (findArticle) {
        state.viewArticle = findArticle;
      } else {
        state.viewArticle = { status: "Error" };
      }
    },
  },
});

export const { setData, setViewArticle } = articleSlice.actions;
export default articleSlice.reducer;
