import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-div">
        <span></span>
        <nav>
          <NavLink to="/">
            <img src="/assets/shared/desktop/logo.svg" alt="audiophile" />
          </NavLink>

          <ul>
            <NavLink to="/">
              <li className="link">HOME</li>
            </NavLink>
            <NavLink to="/headphones">
              <li className="link">HEADPHONES</li>
            </NavLink>
            <NavLink to="/speakers">
              <li className="link">SPEAKERS</li>
            </NavLink>
            <NavLink to="/earphones">
              <li className="link">EARPHONES</li>
            </NavLink>
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
          <div className="social-div">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
