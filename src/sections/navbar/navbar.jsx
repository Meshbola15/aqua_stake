import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../assets/nav-logo.svg";
import { MdMenu } from "react-icons/md";
import "./navbar.css";
import { Link } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <section className="nav-container">
      <div id="mobile-nav-logo">
        <img src={logo} alt="" />
        <p>Aqua Stake</p>
      </div>

      <nav className={`nav-section ${!isOpened && "mobile-menu"}`}>
        <ul>
          <li>
            <Link to="">Networks</Link>
          </li>
          <li>
            <Link to="">Node Operators</Link>
          </li>
          <li>
            <Link to="">Governace</Link>
          </li>
          <li>
            <Link to="">Analytics</Link>
          </li>
          <li id="nav-logo">
            <img src={logo} alt="" />
            <p>Aqua Stake</p>
          </li>
          <li>
            <Link to="">Developers</Link>
          </li>
          <li>
            <Link to="">Community</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="" id="nav-section-btn">
              Join Telegram
              <IoIosArrowRoundForward size={20} />
            </Link>
          </li>
        </ul>
        <hr className="nav-line" />
      </nav>

      <div className="menu-btn" onClick={() => setIsOpened(!isOpened)}>
        {isOpened ? <MdOutlineClose size={20} /> : <MdMenu size={20} />}
      </div>
    </section>
  );
};

export default Navbar;
