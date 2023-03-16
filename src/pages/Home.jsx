import Audiogear from "../components/audiogear/AudioGear";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";
import Category from "../components/category/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Category />
      <Audiogear />
    </div>
  );
};

export default Home;
