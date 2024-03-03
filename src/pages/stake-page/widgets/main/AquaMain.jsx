import React, { useState } from "react";
import "./AquaMain.css";
import FaqCard from "../../FaqCard/FAqCard";
import {
  stakeStateData,
  connectWalletInfo,
  stakeData,
} from "../../../../data/data";

const Claim = () => {
  return (
    <div className="aqua-connect-wallet-container">
      <section className="aqua-connect-claim-container">
        <h4>Connect wallet to see your withdrawal requests</h4>
        <button>Connect Wallet</button>
        <article>
          <p>Max transaction cost</p>
          <p>NaN</p>
        </article>
      </section>
    </div>
  );
};

const Request = () => {
  return (
    <>
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
    </>
  );
};

const AquaMain = () => {
  const [isMainActive, setIsMainActive] = useState(false);
  return (
    <div className="aqua-stake-main-container">
      <div className="aqua-stake-main-header-texts">
        <h2>Stake AQUA</h2>
        <p>Stake AQUA and receive sAQUA.</p>
      </div>

      <div className="aqua-stake-main-toggle">
        <div
          onClick={() => setIsMainActive(!isMainActive)}
          className={`Aqua-stake-main-request-toggle ${
            isMainActive ? "" : "toggle-active"
          }`}
        >
          <p>Request</p>
        </div>
        <div
          onClick={() => setIsMainActive(!isMainActive)}
          className={`Aqua-stake-main-claim-toggle  ${
            isMainActive ? "toggle-active" : ""
          }`}
        >
          Claim
        </div>
      </div>

      {isMainActive ? <Claim /> : <Request />}

      {/* end of aqua stake-stats-container */}

      <FaqCard faqData={stakeData} />
    </div>
  );
};

export default AquaMain;
