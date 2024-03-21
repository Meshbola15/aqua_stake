import React, { useEffect, useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import logo from "../../assets/nav-logo.svg";
import { MdMenu } from "react-icons/md";
import "./navbar.css";
import { MdOutlineClose } from "react-icons/md";
import { HashLink } from "react-router-hash-link";

const NavbarLinkItems = ({ path, name }) => {
  return (
    <li className="navbar-item-link">
      <HashLink
        scroll={(el) => el.scrollIntoView({ behavior: "smooth" })}
        to={`/#${path}`}
        className="navbar-item-link"
      >
        {name}
      </HashLink>
    </li>
  );
};

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
          <NavbarLinkItems path="network" name="Network" />

          <NavbarLinkItems path="about" name="About" />
          <NavbarLinkItems path="dao" name="DAO" />
          <li id="nav-logo">
            <img src={logo} alt="" />
            <p>Aqua Stake</p>
          </li>

          <NavbarLinkItems path="audit" name="Audit" />

          <NavbarLinkItems path="community" name="Community" />
          <HashLink to="/stake/main" id="nav-section-btn">
            Stake Now
            <IoIosArrowRoundForward size={20} />
          </HashLink>
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
