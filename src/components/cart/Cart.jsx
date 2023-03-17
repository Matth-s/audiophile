import { useSelector } from "react-redux";
import RemoveCart from "../button/RemoveCart";
import ArticleCart from "../article/ArticleCart";
import GoCheckOut from "../button/GoCheckOut";

const Cart = () => {
  const cartSelector = useSelector((state) => state.cart);
  const cart = cartSelector.cart;
  const total = cartSelector.total;

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
