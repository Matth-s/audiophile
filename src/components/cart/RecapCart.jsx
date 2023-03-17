import ArticleCart from "../article/ArticleCart";
import { useSelector } from "react-redux";

const RecapCart = () => {
  const selectorCart = useSelector((state) => state.cart);
  const cart = selectorCart.cart;
  const total = selectorCart.total;

  return (
    <div className="recapCart-container border-radius">
      <h6>Summary</h6>
      <div className="recapArticle-div">
        {cart.map((item) => (
          <ArticleCart key={item.slug} article={item} />
        ))}
      </div>
      <ul>
        <li>
          <p className="body1">TOTAL</p>
          <h6>${total}</h6>
        </li>
        <li>
          <p className="body1">SHIPPING</p>
          <h6>$50</h6>
        </li>
        <li>
          <p className="body1">VAT (INCLUDED)</p>
          <h6>${total / 5}</h6>
        </li>
        <li>
          <p className="body1">GRAND TOTAL</p>
          <h6>${total + 50}</h6>
        </li>
      </ul>
    </div>
  );
};

export default RecapCart;
