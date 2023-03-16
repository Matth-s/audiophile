const CheckOut = ({ total }) => {
  return (
    <button className={`checkOut-button ${total === 0 ? "inactive" : null}`}>
      CHECKOUT
    </button>
  );
};

export default CheckOut;
