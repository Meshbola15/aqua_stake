import React from "react";
import "./stake.css";
import ethlogo from "../../assets/eth-logo.svg";
import polygon from "../../assets/polygon-logo.svg";
import { Link } from "react-router-dom";

const Stake = () => {
  return (
    <div className="stake-container">
      <h2>Stake with Aqua Stake</h2>
      <p>Stake your Aqua on the available networks</p>

      <section className="stake-card-container">
        <div>
          <img src={ethlogo} alt="" />

          <h2>Variable</h2>
          <p>APR</p>

          <Link to="/page/stake">Stake now</Link>
        </div>
        <div>
          <img src={polygon} alt="" />

          <h2>Coming Soon!</h2>
          {/* <div className="spacer"/> */}
          <p>
            <br />
          </p>

          <Link to="/page/stake">Stake now</Link>
        </div>
      </section>
    </div>
  );
};

export default Stake;
