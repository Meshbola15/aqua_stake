import React from "react";
import "./AquaMain.css";
import FaqCard from "../../FaqCard/FAqCard";
import {
  stakeStateData,
  connectWalletInfo,
  stakeData,
} from "../../../../data/data";

const AquaMain = () => {
  return (
    <div className="aqua-stake-main-container">
      <div className="aqua-stake-main-header-texts">
        <h2>Stake AQUA</h2>
        <p>Stake AQUA and receive sAQUA.</p>
      </div>

      {/* connect wallet conatiner */}
      <div className="aqua-connect-wallet-container">
        <form className="aqua-connect-wallet-input-container">
          <input type="text" name="eth address text" id="eth-address-input" />
          <button className="aqua-connect-wallet-connect-btn">
            Connect Wallet
          </button>
        </form>
        <article className="aqua-connect-wallect-price-info">
          {connectWalletInfo.map((item, index) => (
            <div key={index} className="aqua-connect-wallect-price-info-text">
              <p>{item.title}</p>
              <p>{item.subTitle}</p>
            </div>
          ))}
        </article>
      </div>

      {/* end of connect wallet container */}

      <div className="aqua-stake-stats-section">
        <article className="aqua-stake-stats-header-text-section">
          <h3>Aqua Stake Statistics</h3>
          <a href="#">View on etherscan</a>
        </article>

        <div className="aqua-stake-stats-text-container">
          {stakeStateData.map((item, index) => (
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

export default AquaMain;
