import { useEffect, useState } from "react";
import ArticlePresentation from "./ArticlePresentation";

const Article = ({ article }) => {
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const [image, setImage] = useState();

  useEffect(() => {
    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    switch (true) {
      case pageWidth > 770:
        setImage(article.image.desktop);
        break;
      default:
        setImage(article.image.mobile);
        break;
    }
  }, [pageWidth, article]);

  return (
    <div className="article-container flex flex__alignCenter flex__spaceBtw">
      <div className="image-div">
        <img
          className="border-radius"
          src={image}
          alt={`article ${article.name}`}
        />
      </div>
      <ArticlePresentation presentation={article} />
    </div>
  );
};

export default Article;
