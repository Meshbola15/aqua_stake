import React from "react";
import "./supported.css";
import eth from "../../assets/eth-logo.svg";
import polygon from "../../assets/polygon-logo.svg";
import sol from "../../assets/solana-logo.svg";

const Supported = () => {
  return (
    <div className="supported-container">
      <section className="supported-header">
        <article>
          <h2>Supported</h2>
          <h2>Networks</h2>
          <hr />
        </article>
        <p>
          Aqua Stake lets you stake tokens from many networks. Choose a network
          below to get started.
        </p>
      </section>

      <section className="supported-card-section">
        {/* First container */}
        <div className="supported-card">
          <img src={eth} alt="Etheruem" />

          <h4>Ethereum</h4>
          <p>Stake your AQUA, get daily rewards and received sAQUA</p>

          <section className="supported-card-variable">
            <article>
              <h3 id="variable-coloured">Variable</h3>
              <p>APR</p>
            </article>

            <hr />

            <article>
              <h3>NAN</h3>
              <p>Staked</p>
            </article>
          </section>

          <section className="supported-btn">
            <a href="#">Learn more</a>
            <a href="#">Stake now</a>
          </section>
        </div>
        {/* End of second Container */}

        {/* Start of the second container */}

        <div className="supported-card card-dark">
          <img src={polygon} alt="polygon" />

          <h4>Polygon</h4>

          <h3 className="supported-soon">Coming Soon!</h3>

          <section className="supported-btn">
            <a href="#">Learn more</a>
            <a href="#">Stake now</a>
          </section>
        </div>

        {/* End of the second container */}

        {/* Start of third container */}
        <div className="supported-card">
          <img src={sol} alt="solana" />

          <h4>Solana</h4>

          <h3 className="supported-soon">Coming Soon!</h3>

          <section className="supported-btn">
            <a href="#">Learn more</a>
            <a href="#">Stake now</a>
          </section>
        </div>

        {/* End of third container */}
      </section>
    </div>
  );
};

export default Supported;