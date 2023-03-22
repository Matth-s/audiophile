import { useState } from "react";
import ArticleCart from "../article/ArticleCart";
import BackHome from "../button/BackHome";

const Order = ({ cart, total }) => {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className="order-container">
      <div className="order-div border-radius">
        <img
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="confirmation"
        />
        <h3>THANK YOU FOR YOUR ORDER</h3>
        <p className="body1">You will receive an email confirmation shortly.</p>

        <div className="recap-div flex border-radius">
          <div className="left-div">
            <div className={`recapItem-div ${seeMore && "changeHeight"}`}>
              {cart.map((item) => (
                <ArticleCart key={item.slug} article={item} />
              ))}
            </div>
            {cart.length > 1 && (
              <div className="othersItem-div">
                {seeMore ? (
                  <p onClick={() => setSeeMore(false)}>View less</p>
                ) : (
                  <p onClick={() => setSeeMore(true)}>
                    and {cart.length - 1} other item(s)
                  </p>
                )}
              </div>
            )}
          </div>

          <div className="right-div flex">
            <div className={`total-div ${seeMore && "changePosition"}`}>
              <p>GRAND TOTAL</p>
              <h6>$ {total.toLocaleString()}</h6>
            </div>
          </div>
        </div>

        <BackHome />
      </div>
    </div>
  );
};

export default Order;
