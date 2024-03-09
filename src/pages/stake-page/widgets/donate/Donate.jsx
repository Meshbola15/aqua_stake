import React from "react";
import "../main/AquaMain.css";
import { donateETH, donateETHInfo, stakeData } from "../../../../data/data";
import FaqCard from "../../FaqCard/FAqCard";

const Donate = () => {
  return (
    <div className="aqua-stake-main-container">
      <div className="aqua-stake-main-header-texts">
        <h2>Contribute ETH</h2>
        <p>Deposit ETH and receive sAQUA</p>
      </div>

      <div className="aqua-connect-wallet-container">
        <form className="aqua-connect-wallet-input-container">
          <input type="text" name="eth address text" id="eth-address-input" />
          <button className="aqua-connect-wallet-connect-btn">
            Connect Wallet
          </button>
        </form>
        <article className="aqua-connect-wallect-price-info">
          {donateETHInfo.map((item, index) => (
            <div key={index} className="aqua-connect-wallect-price-info-text">
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </article>
      </div>

      <div className="aqua-stake-stats-section">
        <article className="aqua-stake-stats-header-text-section">
          <h3>ETH Pool Statistics</h3>
          <a href="#">View on etherscan</a>
        </article>

        <div className="aqua-stake-stats-text-container">
          {donateETH.map((item, index) => (
            <div key={index} className="aqua-stake-stats-texts">
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <FaqCard faqData={stakeData} />
    </div>
  );
};

export default Donate;
