import React from "react";
import "./footer.css";
import logo from "../../assets/logo-big.svg";

const Footer = () => {
  return (
    <section className="footer-container">
      <footer className="footer-details">
        <section className="footer-section-1">
          <div>
            <img src={logo} alt="" />
            <h2>AQUA STAKE</h2>
          </div>

          <p>Stake your AQUA and start earning uncapped rewards</p>
        </section>

        <section className="footer-link-section">
          <ul>
            <li>
              <p>Menu</p>
            </li>
            <li>
              <a href="#">Networks</a>
            </li>
            <li>
              <a href="#">Node operators</a>
            </li>
            <li>
              <a href="#">Governance</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
            <li>
              <a href="#">Coummunity</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>

          {/* ////////////////////// */}

          <ul>
            <li>
              <p>Networks</p>
            </li>
            <li>
              <a href="#">Etheruem</a>
            </li>
            <li>
              <a href="#">polygon</a>
            </li>
            <li>
              <a href="#">Solana</a>
            </li>
          </ul>

          {/* //////////////////// */}

          <ul>
            <li>
              <p>Community</p>
            </li>
            <li>
              <a href="#">Discord</a>
            </li>
            <li>
              <a href="#">Telegram</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Github</a>
            </li>
            <li>
              <a href="#">Reddit</a>
            </li>
            <li>
              <a href="#">Medium</a>
            </li>
          </ul>
        </section>
      </footer>
      <section className="footer-bottom-section">
        <hr />
        <section className="footer-bottom">
          <p>Copyright © 2024 AQUASTAKE</p>
          <div>
            <a href="#">Terms of Use</a>|<a href="#">Privacy Policy</a>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Footer;
