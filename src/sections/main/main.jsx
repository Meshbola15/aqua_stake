import React, { useEffect, useState } from "react";
import "./main.css";
import mainImage from "../../assets/main_image.svg";
import { Link } from "react-router-dom";
import { FaCopy } from "react-icons/fa";
import { IoMdCheckmark } from "react-icons/io";

const address = "0x12f9A180198D91F854f3ca23CaF8BE1C83eF3B76";

const Main = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(address);
      setIsCopied(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <section className="main">
      <div className="main-content">
        <h1>The Ultimate Staking Protocol</h1>

        <p>
          Easy and Uncapped staking <br />
          <div onClick={copyAddress()}>
            Contract address: {address}
            {isCopied && <IoMdCheckmark color="green" />}
          </div>
        </p>

        <Link to="/stake/main" className="main-btn">
          Stake now
        </Link>
      </div>

      <div className="main-image-container">
        <img src={mainImage} alt="Image" className="main-image" />
      </div>
    </section>
  );
};

export default Main;
