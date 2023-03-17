import { useNavigate } from "react-router-dom";

const GoCheckOut = ({ total }) => {
  const navigate = useNavigate();

  const handleGoCheckOut = () => {
    navigate("/checkout");
  };

  return (
    <button
      className={`checkOut-button ${total === 0 ? "inactive" : null}`}
      onClick={() => handleGoCheckOut()}
    >
      CHECKOUT
    </button>
  );
};

export default GoCheckOut;
