import ArticlePresentation from "./ArticlePresentation";

const Article = ({ article }) => {
  return (
    <div className="article-container flex flex__alignCenter flex__spaceBtw">
      <div className="image-div">
        <img
          className="border-radius"
          src={article.image.desktop}
          alt={`article ${article.name}`}
        />
      </div>
      <ArticlePresentation presentation={article} />
    </div>
  );
};

export default Article;
