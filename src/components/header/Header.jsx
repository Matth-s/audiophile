import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { links } from "../../utils/Links";

import Cart from "../cart/Cart";

const Header = () => {
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
