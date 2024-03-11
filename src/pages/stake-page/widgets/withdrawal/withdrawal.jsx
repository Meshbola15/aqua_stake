import React, { useState } from "react";
import "./withdrawal.css";
import "../main/AquaMain.css";
import { LiaQuestionCircle } from "react-icons/lia";
import logoBear from "../../../../assets/logo-big.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import aquaLogo from "../../../../assets/logo-bg-white.svg";
import paraSwap from "../../../../assets/para-swap.svg";
import { RxDash } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import FaqCard from "../../FaqCard/FAqCard";
import {
  withdrawalFaqData,
  withdrawalData,
  connectWalletInfo,
  stakeStateData,
} from "../../../../data/data";

const SectionOne = () => {
  return (
    <section className="aqua-withdrawal-stake-price-container">
      <div className="aqua-withdrawal-stake-price-container-content">
        <div className="aqua-withdrawal-stake-price-container-content-section">
          <img src={aquaLogo} alt="" />
          <p>Aqua Stake</p>
        </div>
        <div className="aqua-withdrawal-stake-price-container-content-section">
          <p>0.0AQUA</p>
          <LiaQuestionCircle size={20} />
        </div>
      </div>
      <button className="aqua-withdrawal-stake-price-container-content-btn">
        connect wallet
      </button>

      {/* //////////////////////////////////// */}
      <section>
        {withdrawalData.map((item, index) => (
          <div key={index} className="aqua-connect-wallect-price-info-text">
            <p>{item.title}</p>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </section>
    </section>
  );
};

const LinkCard = ({ image, name }) => {
  return (
    <div className="aqua-withdrawal-link-card-container">
      <article className="aqua-withdrawal-link-card-image-details">
        <img src={image} alt="" />
        <div>
          <p>{name}</p>
          <a href="#">
            Go to {name} <FiExternalLink />
          </a>
        </div>
      </article>
      <RxDash size={20} />
    </div>
  );
};

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

const RequestWIthdrawal = () => {
  return (
    <>
      <div className="aqua-withdrawal-main-input-container">
        <div className="aqua-withdrawal-main-input-logo">
          <img src={logoBear} alt="" />
          <IoMdArrowDropdown />
        </div>
        <input
          type="number"
          name=""
          id=""
          className="aqua-withdrawal-main-input-logo-input"
        />

        <button className="aqua-withdrawal-main-input-logo-btn">Max</button>
      </div>
      <section className="aqua-withdrawal-main-card-container">
        <div className="aqua-withdrawal-main-card-box">
          <article className="aqua-withdrawal-main-card-box-container">
            <h4>Use Aqua</h4>
            <img src={aquaLogo} alt="" className="aqua-logo" />
          </article>
          <article className="aqua-withdrawal-main-card-box-container">
            <p>Rate:</p>
            <p>1:1</p>
          </article>
          <article className="aqua-withdrawal-main-card-box-container">
            <p>Waiting Time:</p>
            <p>~ 1-5 day(s)</p>
          </article>
        </div>
        {/* ////////////////////////////////////////// */}
        <div className="aqua-withdrawal-main-card-box">
          <article className="aqua-withdrawal-main-card-box-container ">
            <h4>Use ParaSwap</h4>
            <img src={paraSwap} alt="Para Swap Logo" />
          </article>
          <article className="aqua-withdrawal-main-card-box-container">
            <p>Best Rate:</p>
            <p>1 : 1.09</p>
          </article>
          <article className="aqua-withdrawal-main-card-box-container">
            <p>Waiting Time:</p>
            <p>~ 1-5 minute(s)</p>
          </article>
        </div>
      </section>

      {/* /////////////////////////////////// */}

      {/* {isSecondActive ? (
          <SectionOne />
        ) : ( */}
      <section className="">
        <LinkCard name="Para Swap" image={paraSwap} />
      </section>
      {/* )} */}
    </>
  );
};

const AquaWithdrawal = () => {
  const [isMainActive, setIsMainActive] = useState(false);
  return (
    <div className="aqua-main-background">
      <section className="aqua-with-main-content">
        <div className="aqua-withdrawal-header-text-container">
          <h2>Withdrawals</h2>
          <p>Initiate sAQUA withdrawals and claim AQUA</p>
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

        <section className="aqua-withdrawal-main-content-container">
          {isMainActive ? <Claim /> : <RequestWIthdrawal />}
        </section>
        <FaqCard faqData={withdrawalFaqData} />
      </section>
    </div>
  );
};

export default AquaWithdrawal;
