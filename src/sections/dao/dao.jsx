import React from "react";
import "./dao.css";
import governace from "../../assets/goverance-process.svg";

const DAO = () => {
  return (
    <div className="doa-section" id="dao">
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
          $AQUA holders are key to the decision making process of Aquastake
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
