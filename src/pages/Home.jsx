import Audiogear from "../components/audiogear/AudioGear";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Category from "../components/category/Category";
import Footer from "../components/footer/Footer";

import { useEffect } from "react";
import { scrollTop } from "../feature/scrollTop";

const Home = () => {
  useEffect(() => {
    scrollTop();
  }, []);
  return (
    <div className="home-container">
      <Header />
      <Banner />
      <Category />
      <Audiogear />
      <Footer />
    </div>
  );
};

export default Home;
