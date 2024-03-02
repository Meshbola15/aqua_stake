import React from "react";
import "./works.css";
import btcLogo from "../../assets/bitcoin-wallet.svg";
import connection from "../../assets/connection.svg";
import currency from "../../assets/currency.svg";

const WorksCard = ({ image, title, subTitle, lineType }) => {
  return (
    <section className="aqua-works-card-container">
      <div>
        <div className={`aqua-works-card-image-circle ${lineType}`}>
          <img src={image} alt="" className="aqua-works-card-image" />
        </div>
      </div>
      <div className="works-card-text">
        <h4>{title}</h4>
        <p>{subTitle}</p>
      </div>
    </section>
  );
};

const Works = () => {
  return (
    <div className="aqua-works-container-section">
      <h2>How Aqua Stake</h2>
      <h2>Works</h2>
      <hr />
      <section className="aqua-works-container">
        <WorksCard
          image={btcLogo}
          title="Stake AQUA"
          subTitle="Stake any amount of AQUA tokens to receive daily rewards"
          lineType="first"
        />
        <WorksCard
          image={currency}
          title="Receive sAQUA"
          subTitle="Receive liquid sAQUA at a 1:1 ration of AQUA"
          lineType="second"
        />
        <WorksCard
          image={connection}
          title="Compound sAQUA"
          subTitle="Move sAQUA to other defi protocols to maximize daily yield"
          lineType="last"
        />
      </section>
    </div>
  );
};

export default Works;
