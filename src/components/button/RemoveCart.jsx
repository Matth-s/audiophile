import { useDispatch } from "react-redux";
import { removeCart } from "../../feature/cart.slice";

const RemoveCart = ({ total }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeCart());
  };

  return (
    <button
      className={`removeCart-container ${total === 0 ? "inactive" : null}`}
      onClick={() => handleRemoveCart()}
    >
      Remove All
    </button>
  );
};

export default RemoveCart;
