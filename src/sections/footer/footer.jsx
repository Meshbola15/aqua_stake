import React from "react";
import "./footer.css";
import logo from "../../assets/logo-big.svg";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const SectionLink = ({ path, name }) => {
  return (
    <li className="sectionLink">
      <HashLink
        scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
        to={`/#${path}`}
        className="navbar-item-link"
      >
        {name}
      </HashLink>
    </li>
  );
};

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
            <SectionLink name="Networks" path="network" />

            <SectionLink name="About" path="about" />

            <SectionLink name="DAO" path="dao" />

            <SectionLink name="Audit" path="audit" />

            <SectionLink name="Community" path="community" />
          </ul>

          {/* ////////////////////// */}

          <ul>
            <li>
              <p>Networks</p>
            </li>

            <SectionLink name="Etheruem" path="network" />

            <SectionLink name="polygon" path="network" />

            <SectionLink name="Solana" path="network" />
          </ul>

          {/* //////////////////// */}

          <ul>
            <li>
              <p>Community</p>
            </li>

            <li>
              <a href="https://t.me/aquastakeportal" target="_blank">
                Telegram
              </a>
            </li>
            <li>
              <a href="https://twitter.com/Aqua_Stake" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://aqua-stake.gitbook.io/aquastake/"
                target="_blank"
              >
                Git book
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                Medium
              </a>
            </li>
            <li>
              <Link to="/page/faq">FAQ</Link>
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
