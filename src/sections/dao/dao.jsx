import React from "react";
import "./dao.css";
import governace from "../../assets/goverance-process.svg";

const DAO = () => {
  return (
    <div className="doa-section">
      <h2>Aqua stake DAO</h2>

      <hr />

      <p>
        Stakers of AQUA will decide on key parameters of the protocol while
        receiving daily rewards.
      </p>

      <section className="doa-card-section">
        <div className="doa-card-dark">
          <img src={governace} alt="Goverance Processes" />

          <h3>Governance Process</h3>
          <p>
            Explore how the decisions in Aqua Stake governance processes are
            made.
          </p>
        </div>

        <div className="doa-coming-section">
          <section>
            <p>Coming Soon!!!</p>
          </section>
          <section>
            <p>Coming Soon!!!</p>
          </section>
          <section>
            <p>Coming Soon!!!</p>
          </section>
        </div>
      </section>
    </div>
  );
};

export default DAO;
