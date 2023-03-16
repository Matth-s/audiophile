import { useNavigate } from "react-router-dom";

const GoBack = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <button className="goBack-container" onClick={() => handleGoBack()}>
      Go Back
    </button>
  );
};

export default GoBack;
