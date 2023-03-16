import { useDispatch } from "react-redux";
import { controlQuantity } from "../../feature/cart.slice";

const ArticleCart = ({ article }) => {
  const dispatch = useDispatch();

  const slug = article.slug
    .replaceAll("-", " ")
    .replace("headphones", "")
    .replace("earphones", "")
    .replace("mark", "mk")
    .replace("two", "II")
    .replace("one", "I")
    .replace("speaker", "");

  const setQuantity = ({ slug, action }) => {
    dispatch(controlQuantity({ slug, action }));
  };

  return (
    <div className="articleCart-container flex flex__alignCenter">
      <img className="border-radius" src={article.image} alt={article.slug} />
      <section>
        <h6>{slug.toUpperCase()}</h6>
        <p>$ {article.price.toLocaleString()}</p>
      </section>
      <div className="quantity-div flex">
        <button
          className="body2"
          onClick={() => setQuantity({ slug: article.slug, action: "less" })}
        >
          -
        </button>
        <p className="flex body2 flex__alignCenter flex__justifyCenter">
          {article.quantity}
        </p>
        <button
          className="body2"
          onClick={() => setQuantity({ slug: article.slug, action: "add" })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ArticleCart;
