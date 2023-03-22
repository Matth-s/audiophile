import { NavLink, useLocation } from "react-router-dom";
import { links } from "../../utils/Links";

const Footer = () => {
  const location = useLocation();
  const url = location.pathname;

  return (
    <footer className="footer-container">
      <div className="footer-div">
        <span></span>
        <nav>
          <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
          <ul>
            {links.map((link) => (
              <NavLink key={link.name} to={link.directed}>
                <li
                  className={`link ${
                    url.includes(link.name) ? "link__active" : ""
                  }`}
                >
                  {link.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </nav>

        <div className="presentation-div">
          <div className="texte">
            <p>
              Audiophile is an all in one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <p className="copy-rights">Copyright 2021. All Rights Reserved</p>
          </div>
          <ul className="social-div">
            <a href="#">
              <img
                src="/assets/shared/desktop/icon-facebook.svg"
                alt="facebook media"
              />
            </a>
            <a href="#">
              <img
                src="/assets/shared/desktop/icon-twitter.svg"
                alt="twitter media"
              />
            </a>
            <a href="#">
              <img
                src="/assets/shared/desktop/icon-instagram.svg"
                alt="instagram media"
              />
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
