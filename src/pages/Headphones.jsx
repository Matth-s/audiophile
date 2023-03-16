import Header from "../components/header/Header";
import BannerCategory from "../components/banner/BannerCategory";
import AudioGear from "../components/audiogear/AudioGear";
import Article from "../components/article/Article";

import { useSelector } from "react-redux";
import { scrollTop } from "../feature/scrollTop";
import { useEffect } from "react";

const Headphones = () => {
  const selectorArticle = useSelector((state) => state.article.data);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="headphones-container">
      <Header />
      <BannerCategory category={"HEADPHONES"} />
      <div className="article-div">
        {selectorArticle.map(
          (article) =>
            article.category.includes("headphones") && (
              <Article key={article.id} article={article} />
            )
        )}
      </div>
      <AudioGear />
    </div>
  );
};

export default Headphones;
