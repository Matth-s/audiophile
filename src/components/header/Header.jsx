import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { links } from "../../utils/Links";
import { useSelector } from "react-redux";

import Category from "../category/Category";
import Cart from "../modal/Cart";

const Header = () => {
  const cartSelector = useSelector((state) => state.cart.cart);
  const cartLength = cartSelector.length;
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const location = useLocation();
  const url = location.pathname;

  const toggleCart = () => {
    if (openMenu) {
      setOpenMenu(false);
    }
    setIsOpenCart((prev) => !prev);
  };

  const toggleMenu = () => {
    if (isOpenCart) {
      setIsOpenCart(false);
    }
    setOpenMenu((prev) => !prev);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (event.target.className === "blur") {
        setIsOpenCart(false);
      }
    }
    document.addEventListener("click", handleClickOutside);

    const handleResize = () => setPageWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (pageWidth > 840 && openMenu) {
      setOpenMenu(false);
    }
  }, [pageWidth]);

  return (
    <header className="header-container flex">
      <div className="header-div flex flex__alignCenter">
        {pageWidth <= 840 && (
          <img
            onClick={() => toggleMenu()}
            className="menu-image"
            src="/assets/shared/tablet/icon-hamburger.svg"
            alt="icon hamburger"
          />
        )}

        <NavLink to="/home">
          <img src="/assets/shared/desktop/logo.svg" alt="logo audiophile" />
        </NavLink>

        {pageWidth > 840 ? (
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
        ) : (
          openMenu && <Category />
        )}

        <div className="imageDiv-cart" onClick={() => toggleCart()}>
          <img
            className="cartImage"
            src="/assets/shared/desktop/icon-cart.svg"
            alt="cart"
          />
          {cartLength > 0 && <span className="count">{cartLength}</span>}
        </div>
      </div>
      {isOpenCart && <Cart />}
      {(isOpenCart || openMenu) && <span className="blur"></span>}
    </header>
  );
};

export default Header;
