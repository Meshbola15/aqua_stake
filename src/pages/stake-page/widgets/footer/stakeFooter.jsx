import React from "react";
import logo from "../../../../assets/logo-big.svg";
import "./stake-footer.css";

const AquaFooter = () => {
  return (
    <div className="aqua-footer-container">
      <hr />
      <section className="aqua-footer-logo-content">
        <div className="aqua-footer-logo-container">
          <img src={logo} alt="" />
          <p>Aqua Stake</p>
        </div>

        <p className="aqua-footer-container-text">Terms of Use | Privacy Policy</p>
      </section>
    </div>
  );
};

export default AquaFooter;
