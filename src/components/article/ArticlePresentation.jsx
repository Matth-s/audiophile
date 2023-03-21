import SeeProduct from "../button/SeeProduct";
import AddToCart from "../button/AddToCart";

import { useLocation } from "react-router-dom";

const ArticlePresentation = ({ presentation }) => {
  const location = useLocation();
  const isProductPage = location.pathname.match(
    /^\/(headphones|speakers|earphones)\/[\w-]+$/
  );

  return (
    <div className="articlePresentation-container">
      {presentation.new && (
        <span className="newProduct specialProduct">NEW PRODUCT</span>
      )}
      <h2>{presentation.name.toUpperCase()}</h2>
      <p className="description">{presentation.description}</p>

      {isProductPage === null ? (
        <SeeProduct
          slugArticle={presentation.slug}
          category={presentation.category}
        />
      ) : (
        <>
          <p className="price">$ {presentation.price.toLocaleString()}</p>
          <AddToCart
            slug={presentation.slug}
            price={presentation.price}
            image={presentation.image.desktop}
          />
        </>
      )}
    </div>
  );
};

export default ArticlePresentation;
