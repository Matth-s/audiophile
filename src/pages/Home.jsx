import Audiogear from "../components/audiogear/AudioGear";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Category from "../components/category/Category";
import Footer from "../components/footer/Footer";
import ArticlePresentation from "../components/article/ArticlePresentation";
import { useEffect } from "react";
import { scrollTop } from "../feature/scrollTop";
import SeeProduct from "../components/button/SeeProduct";

const Home = () => {
  const speaker = {
    slug: "zx9-speaker",
    category: "speakers",
    new: false,
    name: "ZX9 Speaker",
    description:
      "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
  };

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <div className="home-container">
      <Header />
      <Banner />
      <Category />
      <div className="list-div">
        <div className="speaker9-div flex  flex__spaceAround border-radius">
          <div className="image-div"></div>
          <ArticlePresentation presentation={speaker} />
        </div>

        <div className="speaker7-div flex border-radius">
          <section>
            <h4>ZX7 SPEAKER</h4>
            <SeeProduct slugArticle={"zx7-speaker"} category={"speakers"} />
          </section>
        </div>

        <div className="earphones-div flex flex__spaceBtw">
          <div className="background-div border-radius"></div>
          <div className="section-div flex border-radius">
            <section>
              <h4>YX1 EARPHONES</h4>
              <SeeProduct
                slugArticle={"yx1-earphones"}
                category={"earphones"}
              />
            </section>
          </div>
        </div>
      </div>
      <Audiogear />
      <Footer />
    </div>
  );
};

export default Home;
