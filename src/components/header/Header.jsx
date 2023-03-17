import { useState } from "react";
import { NavLink } from "react-router-dom";
import Cart from "../cart/Cart";
import { useEffect } from "react";

const Header = () => {
  const [isOpenCart, setIsOpenCart] = useState(false);

  const toggleCart = () => {
    setIsOpenCart((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.className === "blur") {
        setIsOpenCart((prev) => !prev);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
          onClick={() => toggleCart()}
          className="cartImage"
          src="/assets/shared/desktop/icon-cart.svg"
          alt="cart"
        />
      </div>
      {isOpenCart && (
        <>
          <span className="blur"></span>
          <Cart />
        </>
      )}
    </header>
  );
};

export default Header;
