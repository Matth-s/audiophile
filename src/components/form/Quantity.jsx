import { useDispatch } from "react-redux";
import { controlQuantity } from "../../feature/cart.slice";
import { controlQuantityLocalStorage } from "../../feature/localStorage.js";

const Quantity = ({ article }) => {
  const dispatch = useDispatch();

  const setQuantity = ({ slug, action }) => {
    dispatch(controlQuantity({ slug, action }));
    controlQuantityLocalStorage(slug, action);
  };

  return (
    <div className="quantity-div flex">
      <button
        className="body2"
        onClick={() => setQuantity({ slug: article.slug, action: "less" })}
      >
        -
      </button>
      <p className="flex body2 flex__alignCenter flex__justifyCenter">
        {article.quantity}
      </p>
      <button
        className="body2"
        onClick={() => setQuantity({ slug: article.slug, action: "add" })}
      >
        +
      </button>
    </div>
  );
};

export default Quantity;
