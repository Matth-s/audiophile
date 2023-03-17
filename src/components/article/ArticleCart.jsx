import Quantity from "../form/Quantity";
import { useLocation } from "react-router-dom";

const ArticleCart = ({ article }) => {
  const location = useLocation();
  const url = location.pathname;

  const slug = article.slug
    .replaceAll("-", " ")
    .replace("headphones", "")
    .replace("earphones", "")
    .replace("mark", "mk")
    .replace("two", "II")
    .replace("one", "I")
    .replace("speaker", "");

  return (
    <div className="articleCart-container flex flex__alignCenter">
      <img className="border-radius" src={article.image} alt={article.slug} />
      <section>
        <h6>{slug.toUpperCase()}</h6>
        <p>$ {article.price.toLocaleString()}</p>
      </section>
      {url === "/checkout" ? (
        <p>X {article.quantity}</p>
      ) : (
        <Quantity article={article} />
      )}
    </div>
  );
};

export default ArticleCart;
