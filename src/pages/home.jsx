import React from "react";
import Navbar from "../sections/navbar/navbar";
import Main from "../sections/main/main";
import Info from "../sections/info/info";
import Supported from "../sections/supported/supported";
import Works from "../sections/works/Works";
import DAO from "../sections/dao/dao";
import Audits from "../sections/audits/audits";
import Stake from "../sections/stake/stake";
import Community from "../sections/community/community";
import Footer from "../sections/footer/footer";
import { HashRouter } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Info />
      <Supported />
      <Works />
      <DAO />
      <Audits />
      <Stake />
      <Community />
      <Footer />
    </>
  );
};

export default Home;
