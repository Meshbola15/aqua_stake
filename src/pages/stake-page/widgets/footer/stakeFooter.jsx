import React from "react";
import logo from "../../../../assets/logo-big.svg";
import "./stake-footer.css";
import { Link } from "react-router-dom";

const AquaFooter = () => {
  return (
    <div className="aqua-footer-container">
      <hr />
      <section className="aqua-footer-logo-content">
        <Link to="/" className="aqua-footer-logo-container">
          <img src={logo} alt="sAQUA Logo" />
          <p>Aqua Stake</p>
        </Link>

        <p className="aqua-footer-container-text">Terms of Use | Privacy Policy</p>
      </section>
    </div>
  );
};

export default AquaFooter;
