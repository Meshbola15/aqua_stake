import React from "react";
import "./rewards.css";
import "../main/AquaMain.css";

const transferData = [
  {
    balance: "-",
    rewarded: "-",
    avrAPR: "-",
    price: "-",
  },
  {
    balance: "-",
    rewarded: "-",
    avrAPR: "-",
    price: "-",
  },
];

const RewardTable = () => {
  return (
    <table className="reward-table-container">
      <thead>
        <tr>
          <th>sAQUA balance</th>
          <th>sAQUA rewarded</th>
          <th>Average APR</th>
          <th>sAQUA price</th>
        </tr>
      </thead>
      <tbody>
        {transferData.map((item, index) => (
          <tr key={index}>
            <td>$ {item.balance}</td>
            <td>$ {item.rewarded}</td>
            <td>$ {item.avrAPR}</td>
            <td>$ {item.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const AquaRewards = () => {
  return (
    <div className="reward-main-background">
      <div className="reward-header-content">
        <h2>Reward History</h2>
        <p>Track your sAQUA staking rewards with Aqua Stake.</p>
      </div>
      <section className="reward-body">
        <div className="reward-input-contents">
          <input type="text" placeholder="Ethereum Address" />
          <article>
            Current balance may differ from last balance in the table due to
            rounding.
          </article>
        </div>

        <section className="reward-table-section">
          <RewardTable />
        </section>
      </section>

      <section className="reward-history-content-section">
        <div className="reward-history-checkmark-container">
          <h4>Reward History</h4>
          <div className="reward-history-checkmark-div">
            <input type="checkbox" name="reward-checkbox" id="Reward History" />
            <p>sAQUA rewarded</p>
          </div>
          <div className="reward-history-checkmark-div">
            <input type="checkbox" name="reward-checkbox" id="Reward History" />
            <p>Average APR</p>
          </div>
        </div>
        <hr />
        <p>
          Connect your wallet or enter your Ethereum address to see the stats.
        </p>
      </section>
    </div>
  );
};

export default AquaRewards;
