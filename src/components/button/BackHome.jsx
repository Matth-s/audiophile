import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeCart } from "../../feature/cart.slice";

const BackHome = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoHome = () => {
    navigate("/home");
    dispatch(removeCart());
  };

  return (
    <button className="backToHome-button" onClick={() => handleGoHome()}>
      BACK TO HOME
    </button>
  );
};

export default BackHome;
