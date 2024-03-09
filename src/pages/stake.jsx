import React from "react";
import AquaMain from "./stake-page/widgets/main/AquaMain";
import AquaNavbar from "./stake-page/widgets/navbar/stake-navbar";
import "./stake.css";
import AquaFooter from "./stake-page/widgets/footer/stakeFooter";
import AquaRewards from "./stake-page/widgets/rewards/rewards";
import { Routes, Route } from "react-router-dom";
import AquaWithdrawal from "./stake-page/widgets/withdrawal/withdrawal";
import FAQ from "./stake-page/widgets/FAQ/FAQ";
import Donate from "./stake-page/widgets/donate/Donate";
const StakeHome = () => {
  return (
    <div className="stake-home">
      <AquaNavbar />
      <Routes>
        <Route path="main" element={<AquaMain />} />
        <Route path="withdrawals" element={<AquaWithdrawal />} />
        <Route path="reward" element={<AquaRewards />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="pools" element={<Donate />} />
      </Routes>
      <AquaFooter />
    </div>
  );
};

export default StakeHome;
