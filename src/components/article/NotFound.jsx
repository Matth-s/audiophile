import GoHome from "../button/GoHome";

const NotFound = ({ slug }) => {
  return (
    <div className="notFound-container">
      <h3>
        The article "<span>{slug}</span>" was not found
      </h3>
      <GoHome />
    </div>
  );
};

export default NotFound;
