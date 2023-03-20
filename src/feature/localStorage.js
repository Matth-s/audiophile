export const addItemLocalStorage = (item) => {
  const object = {
    slug: item.slug,
    quantity: item.quantity,
  };
  let findItem = false;

  let cart = JSON.parse(window.localStorage.getItem("cart"));

  cart = cart.map((itemCart) => {
    if (itemCart.slug === object.slug) {
      findItem = true;
      return {
        ...itemCart,
        quantity: itemCart.quantity + object.quantity,
      };
    }
    return itemCart;
  });

  if (!findItem) {
    cart.push(object);
  }

  window.localStorage.cart = JSON.stringify(cart);
};

export const controlQuantityLocalStorage = (slug, action) => {
  let cart = JSON.parse(window.localStorage.getItem("cart"));

  cart = cart.map((item) => {
    if (item.slug === slug) {
      return {
        ...item,
        quantity: action === "add" ? item.quantity + 1 : item.quantity - 1,
      };
    }
    return item;
  });

  const checkQuantity = cart.find((x) => x.slug === slug);

  if (checkQuantity.quantity === 0) {
    cart = cart.find((x) => x.slug !== slug);
  }

  if (cart === undefined) {
    cart = [];
  }

  window.localStorage.cart = JSON.stringify(cart);
};

export const removeLocalStorage = () => {
  let cart = JSON.parse(window.localStorage.getItem("cart"));
  cart = [];
  window.localStorage.cart = JSON.stringify(cart);
};
