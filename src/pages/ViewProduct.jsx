import Header from "../components/header/Header";
import Article from "../components/article/Article";
import Category from "../components/category/Category";
import AudioGear from "../components/audiogear/AudioGear";
import AlsoLike from "../components/category/AlsoLike";
import GoBack from "../components/button/GoBack";
import Footer from "../components/footer/Footer";
import ArticleFeatures from "../components/article/ArticleFeatures";
import Gallery from "../components/gallery/Gallery";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { setViewArticle } from "../feature/article.slice";
import { scrollTop } from "../feature/scrollTop";
import NotFound from "../components/article/NotFound";

const ViewProduct = () => {
  const dispatch = useDispatch();
  const article = useSelector((state) => state.article.viewArticle);
  const location = useLocation();
  const url = location.pathname;
  const slug = url.split("/").pop();

  useEffect(() => {
    if (article.length === 0) {
      dispatch(setViewArticle(slug));
    }
    scrollTop();
  }, [url, slug, dispatch]);

  return (
    <div className="viewProduct-container flex flex__column">
      <Header />
      {article.length !== 0 &&
        (article.status === undefined ? (
          <div className="viewProduct-div">
            <GoBack />
            <Article article={article} />
            <ArticleFeatures
              description={article.features}
              includes={article.includes}
            />
            <Gallery image={article.gallery} />
            <div className="asloLike-div">
              <h3>YOU MAY ALSO LIKE</h3>
              <div className="flex flex__spaceBtw">
                {article.others.map((other) => (
                  <AlsoLike key={other.name} otherItem={other} />
                ))}
              </div>
            </div>
            <Category />
            <AudioGear />
          </div>
        ) : (
          <NotFound slug={slug} />
        ))}
      <Footer />
    </div>
  );
};

export default ViewProduct;
