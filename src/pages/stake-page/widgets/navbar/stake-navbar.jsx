import React, { useState } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { BsBoxFill } from "react-icons/bs";
import { IoCloudDownloadSharp } from "react-icons/io5";
import { MdOutlineClose } from "react-icons/md";
import "./stake-navbar.css";
import navlogo from "../../../../assets/logo-big.svg";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const AquaNavbar = () => {
  const [isMenuActive, setisMenuActive] = useState(false);
  return (
    <div className="aqua-stake-navbar-container">
      <div className="aqua-stake-navbar-container-right">
        <Link to="/">
          <div className="aqua-stake-navbar-logo-container">
            <img src={navlogo} alt="" />
            <p>Aqua Stake</p>
          </div>
        </Link>
      </div>
      <nav
        className={`aqua-stake-navbar-nav ${isMenuActive && "stake-navbar"}`}
      >
        <ul>
          <Link to="stake">
            <AiFillThunderbolt />
            <p>Stake</p>
          </Link>
          <Link to="wrap">
            <BsBoxFill />
            <p>Rewards</p>
          </Link>
          <Link to="withdrawals">
            <IoCloudDownloadSharp />
            <p>Withdrawals</p>
          </Link>
          <Link to="" className="aqua-stake-navbar-connect-btn-mobile">
            Connect wallet
          </Link>
        </ul>
      </nav>

      <div className="aqua-stake-navbar-menu">
        <Link to="" className="aqua-stake-navbar-connect-btn">
          Connect wallet
        </Link>
        {isMenuActive ? (
          <MdMenu
            className="stake-menu"
            color="white"
            size={20}
            onClick={() => setisMenuActive(!isMenuActive)}
          />
        ) : (
          <MdOutlineClose
            className="stake-menu"
            color="white"
            size={20}
            onClick={() => setisMenuActive(!isMenuActive)}
          />
        )}
      </div>
    </div>
  );
};

export default AquaNavbar;
