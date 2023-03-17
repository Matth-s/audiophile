import Header from "../components/header/Header";
import Information from "../components/form/Information";
import GoBack from "../components/button/GoBack";
import RecapCart from "../components/cart/RecapCart";
import Footer from "../components/footer/Footer";
import GoHome from "../components/button/GoHome";

import { useSelector } from "react-redux";

const CheckOut = () => {
  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="checkout-container flex flex__column">
      <Header />
      {cart.length > 0 ? (
        <div className="checkout-div">
          <GoBack />
          <div className="flex flex__spaceBtw">
            <Information />
            <RecapCart />
          </div>
        </div>
      ) : (
        <div className="empty-div">
          <h2>You cart is empty ...</h2>
          <GoHome />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CheckOut;
