import { configureStore } from "@reduxjs/toolkit";

import ArticleSlice from "../feature/article.slice";
import CartSlice from "../feature/cart.slice";

export const store = configureStore({
  reducer: {
    article: ArticleSlice,
    cart: CartSlice,
  },
});

export default store;
