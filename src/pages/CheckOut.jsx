import Header from "../components/header/Header";
import Information from "../components/form/Information";
import GoBack from "../components/button/GoBack";
import RecapCart from "../components/cart/RecapCart";
import Footer from "../components/footer/Footer";
import GoHome from "../components/button/GoHome";
import Order from "../components/modal/Order";

import { useSelector } from "react-redux";
import { useState } from "react";

const CheckOut = () => {
  const selectorCart = useSelector((state) => state.cart);
  const cart = selectorCart.cart;
  const total = selectorCart.total;
  const [openOrder, setOpenOrder] = useState(false);

  return (
    <div className="checkout-container flex flex__column">
      <Header />
      {cart.length > 0 ? (
        <div className="checkout-div">
          <GoBack />
          <div className="flex flex__spaceBtw">
            <Information setOpenOrder={setOpenOrder} />
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
      {openOrder && <Order total={total} cart={cart} />}
    </div>
  );
};

export default CheckOut;
