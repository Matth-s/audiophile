import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { totalCart } from "../../feature/cart.slice";

import RemoveCart from "../button/RemoveCart";
import ArticleCart from "../article/ArticleCart";
import GoCheckOut from "../button/GoCheckOut";

const Cart = () => {
  const dispatch = useDispatch();
  const cartSelector = useSelector((state) => state.cart);
  const cart = cartSelector.cart;
  const total = cartSelector.total;

  useEffect(() => {
    dispatch(totalCart());
  }, [cart]);

  return (
    <div className="cart-container border-radius" data-testid="cart-container">
      <div className="headerCart-div flex flex__spaceBtw">
        <h6>Cart ({cart.length})</h6>
        <RemoveCart total={total} />
      </div>

      {cart.length > 0 ? (
        <div className="cartItem-div">
          {cart.map((item) => (
            <ArticleCart key={item.slug} article={item} />
          ))}
        </div>
      ) : (
        <h2>Empty cart</h2>
      )}

      <div className="total-div flex flex__spaceBtw">
        <p>TOTAL</p>
        <p>$ {total}</p>
      </div>

      <GoCheckOut total={total} />
    </div>
  );
};

export default Cart;
