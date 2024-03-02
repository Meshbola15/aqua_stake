import React, { useState } from "react";
import "./AquaMain.css";
import FaqCard from "../../FaqCard/FAqCard";

const connectWalletInfo = [
  {
    title: "You will receive",
    subTitle: "0 sAQUA",
  },
  {
    title: "Exchange rate",
    subTitle: "1 AQUA = 1 sAQUA",
  },
  {
    title: "Max transaction cost",
    subTitle: "N/A", // Assuming "N/A" represents not applicable
  },
  {
    title: "Reward fee",
    subTitle: "Variable",
  },
];

const stakeStateData = [
  {
    title: "Annual percentage rate",
    subTitle: "N/A",
  },
  {
    title: "Total staked with Aqua stake",
    subTitle: "N/A AQUA",
  },
  {
    title: "Stakers",
    subTitle: "N/A",
  },
  {
    title: "sAQUA market cap",
    subTitle: "N/A",
  },
];

const faqData = [
  {
    id: 1,
    question: "What is Aqua Stake?",
    answer:
      "Aqua Stake is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum, Solana, and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
  },
  {
    id: 2,
    question: "How does Aqua stake work?",
    answer:
      "Aqua Stake is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum, Solana, and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
  },
  {
    id: 3,
    question: "Is it safe to work with Aqua Stake?",
    answer:
      "Aqua Stake is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum, Solana, and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
  },
  {
    id: 4,
    question: "What are the risks of staking with Aqua Stake?",
    answer:
      "Aqua Stake is the name of a family of open-source peer-to-system software tools deployed and functioning on the Ethereum, Solana, and Polygon blockchain networks. The software enables users to mint transferable utility tokens, which receive rewards linked to the related validation activities of writing data to the blockchain, while the tokens can be used in other on-chain activities.",
  },
];

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
          <input type="number" name="" id="" />
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
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [isMainActive, setIsMainActive] = useState(false);
  const [faqIndex, setFaqIndex] = useState(0);
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

      <FaqCard faqData={faqData} />
    </div>
  );
};

export default AquaMain;
