import React, { useState } from "react";
import "./withdrawal.css";
import "../main/AquaMain.css";
import { LiaQuestionCircle } from "react-icons/lia";
import logoBear from "../../../../assets/logo-big.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import aquaLogo from "../../../../assets/logo-bg-white.svg";
import paraSwap from "../../../../assets/para-swap.svg";
import cowSwap from "../../../../assets/aggre-logo.svg";
import aggregator from "../../../../assets/aggregator.svg";
import linch from "../../../../assets/linch.svg";
import { RxDash } from "react-icons/rx";
import { FiExternalLink } from "react-icons/fi";
import FaqCard from "../../FaqCard/FAqCard";
import { withdrawalFaqData, withdrawalData } from "../../../../data/data";

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

const AquaWithdrawal = () => {
  const [isSecondActive, setIsSecondActive] = useState(false);
  return (
    <div className="aqua-main-background">
      <section className="aqua-with-main-content">
        <div className="aqua-withdrawal-header-text-container">
          <h2>Withdrawals</h2>
          <p>Initiate sAQUA withdrawals and claim AQUA</p>
        </div>

        <section>
          <div></div>
        </section>

        <section className="aqua-withdrawal-main-content-container">
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

          {/* /////////////////////////////// */}
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
                <h4>Use Aggregators</h4>
                <img src={aggregator} alt="" className="aggre-logo" />
              </article>
              <article className="aqua-withdrawal-main-card-box-container">
                <p>Best Rate:</p>
                <p>1 : 1.0003</p>
              </article>
              <article className="aqua-withdrawal-main-card-box-container">
                <p>Waiting Time:</p>
                <p>~ 1-5 minute(s)</p>
              </article>
            </div>
          </section>

          {/* /////////////////////////////////// */}

          {isSecondActive ? (
            <SectionOne />
          ) : (
            <section className="">
              <LinkCard name="Para Swap" image={paraSwap} />
              <LinkCard name="Cow Swap" image={cowSwap} />
              <LinkCard name="linch" image={linch} />
            </section>
          )}
        </section>
        <FaqCard faqData={withdrawalFaqData} />
      </section>
    </div>
  );
};

export default AquaWithdrawal;
