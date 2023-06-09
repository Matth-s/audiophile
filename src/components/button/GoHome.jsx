import { useNavigate } from "react-router-dom";

const GoHome = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <button className="goHome-button" onClick={() => handleGoHome()}>
      Go Home
    </button>
  );
};

export default GoHome;
