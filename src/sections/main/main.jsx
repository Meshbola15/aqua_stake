import React from "react";
import "./main.css";
import mainImage from "../../assets/main_image.svg";

const Main = () => {
  return (
    <section className="main">
      <div className="main-content">
        <h1>
          The Ultimate <br /> Staking Protocol
        </h1>

        <p>Easy and Uncapped staking</p>

        <a href="#" className="main-btn">
          Stake now
        </a>
      </div>

      <div className="main-image-container">
        <img src={mainImage} alt="Image" className="main-image" />
      </div>
    </section>
  );
};

export default Main;
