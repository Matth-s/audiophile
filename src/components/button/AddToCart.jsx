import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addArticleCart } from "../../feature/cart.slice";

const AddToCart = ({ slug, price, image }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [slug]);

  const handleAddToCart = (item) => {
    dispatch(addArticleCart(item));
  };

  const handleMenosQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="addToCart-container flex flex__spaceBtw">
      <div className="quantity-div flex ">
        <button onClick={() => handleMenosQuantity()}>-</button>
        <p className="flex flex__alignCenter flex__justifyCenter">{quantity}</p>
        <button onClick={() => handleAddQuantity()}>+</button>
      </div>
      <button
        className="seeProduct-button"
        onClick={() => handleAddToCart({ slug, quantity, price, image })}
      >
        ADD TO CART
      </button>
    </div>
  );
};

export default AddToCart;
