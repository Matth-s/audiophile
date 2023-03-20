import { useNavigate } from "react-router-dom";

const BackHome = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <button className="backToHome-button" onClick={() => handleGoHome()}>
      BACK TO HOME
    </button>
  );
};

export default BackHome;
