import { useNavigate } from "react-router-dom";
import Shop from "../button/Shop";

const Category = () => {
  const navigate = useNavigate();

  const category = [
    {
      name: "headphones",
      image: "/assets/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
      name: "speakers",
      image: "/assets/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
      name: "earphones",
      image: "/assets/shared/desktop/image-category-thumbnail-earphones.png",
    },
  ];

  const handleViewCategory = (category) => {
    navigate(`/${category}`);
  };

  return (
    <div className="category-container flex flex__spaceBtw">
      {category.map((item) => (
        <div
          className="category-div border-radius"
          key={item.name}
          onClick={() => handleViewCategory(item.name)}
        >
          <img
            className="imageCategory"
            src={item.image}
            alt={`item ${item.name}`}
          />
          <section>
            <h6>{item.name.toUpperCase()}</h6>
            <Shop />
          </section>
        </div>
      ))}
    </div>
  );
};

export default Category;
