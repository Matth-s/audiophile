import Audiogear from "../components/audiogear/AudioGear";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Category from "../components/category/Category";
import Footer from "../components/footer/Footer";

const Home = () => {
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
