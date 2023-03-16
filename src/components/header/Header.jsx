import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";

const Header = () => {
  const [openCart, setOpenCart] = useState(false);

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  return (
    <header className="header-container flex">
      <div className="header-div flex flex__alignCenter">
        <img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" />
        <nav>
          <ul className="flex">
            <NavLink to="/">
              <li>HOME</li>
            </NavLink>
            <NavLink to="/headphones">
              <li>HEADPHONES</li>
            </NavLink>
            <NavLink to="/speakers">
              <li>SPEAKERS</li>
            </NavLink>
            <NavLink to="/earphones">
              <li>EARPHONES</li>
            </NavLink>
          </ul>
        </nav>
        <img
          onClick={() => handleOpenCart()}
          className="cartImage"
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
        />
      </div>
      {openCart && <Cart />}
    </header>
  );
};

export default Header;
