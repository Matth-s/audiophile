import { useState, useRef } from "react";
import { scrollTop } from "../../feature/scrollTop";

const Information = ({ setOpenOrder }) => {
  const form = useRef();
  const [paymentEmoney, setPaymentEmoney] = useState(true);
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPhone, setErrorPhone] = useState(false);
  const [errorAddress, setErrorAddress] = useState(false);
  const [errorZipCode, setErrorZipCode] = useState(false);
  const [errorCity, setErrorCity] = useState(false);
  const [errorCountry, setErrorCountry] = useState(false);
  const [errorEmoneyNumber, setErrorEmoneyNumber] = useState(false);
  const [errorPin, setErrorPin] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = [
      { name: form.current.name.value.trim() },
      { email: form.current.email.value.trim() },
      { phone: form.current.phone.value.trim() },
      { address: form.current.address.value.trim() },
      { zipCode: form.current.zipCode.value.trim() },
      { city: form.current.zipCode.value.trim() },
      { country: form.current.country.value.trim() },
    ];

    scrollTop();
    setOpenOrder(true);
  };

  return (
    <div className="information-container border-radius">
      <h3>CHECKOUT</h3>
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <section>
          <h6>BILLING DETAILS</h6>
          <div className="section-div flex">
            <div className="input-div">
              <label htmlFor="name">Name</label>
              <input
                className={`input input__medium ${errorName && "input__error"}`}
                type="text"
                name="name"
                id="name"
                placeholder="Alexei Ward"
              />
            </div>

            <div className="input-div">
              <label htmlFor="email">Email</label>
              <input
                className={`input input__medium ${
                  errorEmail && "input__error"
                }`}
                type="email"
                name="email"
                id="email"
                placeholder="alexei@mail.com"
              />
            </div>

            <div className="input-div">
              <label htmlFor="phone">Phone Number</label>
              <input
                className={`input input__medium ${
                  errorPhone && "input__error"
                }`}
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
              className={`input input__large ${errorAddress && "input__error"}`}
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
                className={`input input__medium ${
                  errorZipCode && "input__error"
                }`}
                type="number"
                name="zipCode"
                id="zipCode"
                placeholder="10001"
              />
            </div>

            <div className="input-div">
              <label htmlFor="city">City</label>
              <input
                className={`input input__medium ${errorCity && "input__error"}`}
                type="text"
                name="city"
                id="city"
                placeholder="New York"
              />
            </div>

            <div className="input-div">
              <label htmlFor="country">Country</label>
              <input
                className={`input input__medium ${
                  errorCountry && "input__error"
                }`}
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
          <div className="payment-div flex flex__spaceBtw">
            <label htmlFor="paymentMethod">Payment Method</label>
            <div>
              <div
                className="radio-div flex flex__alignCenter"
                onClick={() => setPaymentEmoney(true)}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  id="e-Money"
                  value="e-Money"
                  defaultChecked
                />
                <label htmlFor="e-Money">e-Money</label>
              </div>

              <div
                className="radio-div flex flex__alignCenter"
                onClick={() => setPaymentEmoney(false)}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  id="cash"
                  value="cash"
                />
                <label htmlFor="cash">Cash on Delivery</label>
              </div>
            </div>
          </div>
        </section>

        <div className="whatPayment-div flex">
          {paymentEmoney ? (
            <div className="e-money-div flex flex__spaceBtw">
              <div className="input-div">
                <label htmlFor="eMoneyNumber">e-Money Number</label>
                <input
                  className="input input__medium"
                  type="number"
                  name="eMoneyNumber"
                  id="eMoneyNumber"
                  placeholder="238521993"
                />
              </div>

              <div className="input-div">
                <label htmlFor="pin">Pin</label>
                <input
                  className="input input__medium"
                  type="text"
                  name="pin"
                  id="pin"
                  placeholder="6891"
                />
              </div>
            </div>
          ) : (
            <div className="cash-div flex">
              <img
                src="/assets/checkout/icon-cash-on-delivery.svg"
                alt="cash"
              />
              <p>
                The ‘Cash on Delivery’ option enables you to pay in cash when
                our delivery courier arrives at your residence. Just make sure
                your address is correct so that your order will not be
                cancelled.
              </p>
            </div>
          )}
        </div>
        <input type="submit" value="CONTINUE & PAY" />
      </form>
    </div>
  );
};

export default Information;
