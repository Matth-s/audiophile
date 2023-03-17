import React from "react";

const Information = () => {
  return (
    <div className="information-container border-radius">
      <h3>CHECKOUT</h3>
      <section>
        <h6>BILLING DETAILS</h6>
        <div className="section-div flex">
          <div className="input-div">
            <label htmlFor="name">Name</label>
            <input
              className="input input__medium"
              type="text"
              name="name"
              id="name"
              placeholder="Alexei Ward"
            />
          </div>

          <div className="input-div">
            <label htmlFor="email">Email</label>
            <input
              className="input input__medium"
              type="email"
              name="email"
              id="email"
              placeholder="alexei@mail.com"
            />
          </div>

          <div className="input-div">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="input input__medium"
              type="tel"
              name="phone"
              id="phone"
              placeholder="+1 202-555-0136"
            />
          </div>
        </div>
      </section>

      <section>
        <h6>SHIPPING INFO</h6>

        <div className="input-div">
          <label htmlFor="address">Address</label>
          <input
            className="input input__large"
            type="text"
            name="address"
            id="address"
            placeholder="1137 Williams Avenue"
          />
        </div>

        <div className="section-div flex">
          <div className="input-div">
            <label htmlFor="zipCode">ZIP Code</label>
            <input
              className="input input__medium"
              type="number"
              name="zipCode"
              id="zipCode"
              placeholder="10001"
            />
          </div>

          <div className="input-div">
            <label htmlFor="city">City</label>
            <input
              className="input input__medium"
              type="text"
              name="city"
              id="city"
              placeholder="New York"
            />
          </div>

          <div className="input-div">
            <label htmlFor="country">Country</label>
            <input
              className="input input__medium"
              type="text"
              name="country"
              id="country"
              placeholder="United States"
            />
          </div>
        </div>
      </section>

      <section>
        <h6>PAYMENTS DETAILS</h6>
        <div className="flex flex__spaceBtw">
          <label htmlFor="paymentMethod">Payment Method</label>
          <div>
            <div className="radio-div flex flex__alignCenter">
              <input
                type="radio"
                name="paymentMethod"
                id="e-Money"
                value="e-Money"
              />
              <label htmlFor="e-Money">e-Money</label>
            </div>

            <div className="radio-div flex flex__alignCenter">
              <input type="radio" name="paymentMethod" id="cash" value="cash" />
              <label htmlFor="cash">Cash on Delivery</label>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Information;
