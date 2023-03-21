import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { links } from "../../utils/Links";
import { useSelector } from "react-redux";
import Cart from "../modal/Cart";

const Header = () => {
  const cartSelector = useSelector((state) => state.cart.cart);
  const cartLength = cartSelector.length;
  const [isOpenCart, setIsOpenCart] = useState(false);
  const location = useLocation();
  const url = location.pathname;

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
            {links.map((link) => (
              <NavLink key={link.name} to={link.directed}>
                <li
                  className={`link ${
                    url.includes(link.name) ? "link__active" : null
                  }`}
                >
                  {link.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className="imageDiv-cart" onClick={() => toggleCart()}>
          <img
            className="cartImage"
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
          />
          {cartLength > 0 && <span className="count">{cartLength}</span>}
        </div>
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
