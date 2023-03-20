import { useDispatch } from "react-redux";
import { removeCart } from "../../feature/cart.slice";
import { removeLocalStorage } from "../../feature/localStorage";

const RemoveCart = ({ total }) => {
  const dispatch = useDispatch();

  const handleRemoveCart = () => {
    dispatch(removeCart());
    removeLocalStorage();
  };

  return (
    <button
      className={`removeCart-button ${total === 0 ? "inactive" : null}`}
      onClick={() => handleRemoveCart()}
    >
      Remove All
    </button>
  );
};

export default RemoveCart;
