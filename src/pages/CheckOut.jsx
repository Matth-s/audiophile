import Header from "../components/header/Header";
import Information from "../components/form/Information";

const CheckOut = () => {
  return (
    <div className="checkout-container">
      <Header />
      <div className="checkout-div">
        <Information />
      </div>
    </div>
  );
};

export default CheckOut;
