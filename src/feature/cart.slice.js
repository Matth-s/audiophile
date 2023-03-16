import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addArticleCart: (state, action) => {
      const slug = action.payload.slug;
      const quantity = action.payload.quantity;
      const findArticle = state.cart.find((x) => x.slug === slug);

      if (findArticle === undefined) {
        state.cart.push(action.payload);
      } else {
        findArticle.quantity = findArticle.quantity + quantity;
      }
    },

    controlQuantity: (state, action) => {
      const article = action.payload.slug;
      const whatDo = action.payload.action;

      const updatedCart = state.cart.map((articleCart) => {
        if (articleCart.slug === article) {
          return {
            ...articleCart,
            quantity:
              whatDo === "add"
                ? articleCart.quantity + 1
                : articleCart.quantity - 1,
          };
        }
        return articleCart;
      });

      state.cart = updatedCart;

      const articleToRemove = state.cart.find((x) => x.slug === article);
      if (articleToRemove.quantity === 0) {
        state.cart = state.cart.filter((x) => x.slug !== article);
      }
    },

    removeCart: (state) => {
      state.cart = [];
      state.total = 0;
    },
  },
});

export const { addArticleCart, removeCart, controlQuantity } =
  CartSlice.actions;
export default CartSlice.reducer;
