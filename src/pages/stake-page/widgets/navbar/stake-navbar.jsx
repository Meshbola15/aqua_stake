import React, { useState } from "react";
import { BiSolidPackage } from "react-icons/bi";
import { MdOutlineClose } from "react-icons/md";
import { HiSquare3Stack3D } from "react-icons/hi2";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { FaQuestionCircle } from "react-icons/fa";
import { BiSolidDonateHeart } from "react-icons/bi";
import "./stake-navbar.css";
import navlogo from "../../../../assets/logo-big.svg";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const AquaNavbar = () => {
  const [isMenuActive, setisMenuActive] = useState(true);
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
        <ul className={`${!isMenuActive && "navbar-nav-list"}`}>
          <Link to="main">
            <HiSquare3Stack3D />
            <p>Stake</p>
          </Link>
          <Link to="reward" >
            <BiSolidPackage />
            <p>Rewards</p>
          </Link>
          <Link to="withdrawals">
            <FaMoneyCheckDollar />
            <p>Withdrawals</p>
          </Link>
          <Link to="faq">
            <FaQuestionCircle />
            <p>FAQ</p>
          </Link>
          <Link to="pools">
            <BiSolidDonateHeart />
            <p>Pools</p>
          </Link>
          <Link to="#" className="aqua-stake-navbar-connect-btn-mobile">
            Connect wallet
          </Link>
        </ul>
      </nav>

      <div className="aqua-stake-navbar-menu">
        <Link to="#" className="aqua-stake-navbar-connect-btn">
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
