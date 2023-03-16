import Header from "../components/header/Header";
import BannerCategory from "../components/banner/BannerCategory";
import AudioGear from "../components/audiogear/AudioGear";
import Article from "../components/article/Article";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { scrollTop } from "../feature/scrollTop";

const Speakers = () => {
  const selectorArticle = useSelector((state) => state.article.data);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div>
      <Header />
      <BannerCategory category={"SPEAKERS"} />
      <div className="article-div">
        {selectorArticle.map(
          (article) =>
            article.category.includes("speakers") && (
              <Article key={article.id} article={article} />
            )
        )}
      </div>
      <AudioGear />
    </div>
  );
};

export default Speakers;
