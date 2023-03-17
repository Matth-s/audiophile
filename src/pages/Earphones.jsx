import Header from "../components/header/Header";
import BannerCategory from "../components/banner/BannerCategory";
import AudioGear from "../components/audiogear/AudioGear";
import Article from "../components/article/Article";
import Footer from "../components/footer/Footer";

import { useSelector } from "react-redux";
import { useEffect } from "react";
import { scrollTop } from "../feature/scrollTop";

const Earphones = () => {
  const selectorArticle = useSelector((state) => state.article.data);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div>
      <Header />
      <BannerCategory category={"EARPHONES"} />
      <div className="article-div">
        {selectorArticle.map(
          (article) =>
            article.category.includes("earphones") && (
              <Article key={article.id} article={article} />
            )
        )}
      </div>
      <AudioGear />
      <Footer />
    </div>
  );
};

export default Earphones;
