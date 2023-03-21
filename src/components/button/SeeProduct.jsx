import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setViewArticle } from "../../feature/article.slice";

const SeeProduct = ({ slugArticle, category }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSeeProduct = (slug, cate) => {
    dispatch(setViewArticle(slug));
    navigate(`/${cate}/${slug}`);
  };

  return (
    <button
      className="seeProduct-button"
      onClick={() => handleSeeProduct(slugArticle, category)}
    >
      SEE PRODUCT
    </button>
  );
};

export default SeeProduct;
