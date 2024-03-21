import React from "react";
import FAQ1 from "../../../../assets/FAQ_1.jpg";
import FAQ2 from "../../../../assets/FAQ_2.svg";
import FAQ3 from "../../../../assets/FAQ_3.svg";
import FAQ4 from "../../../../assets/FAQ_4.jpg";
import FAQ5 from "../../../../assets/FAQ_5.jpg";
import "./FAQ.css"

const FAQ = () => {
  return (
    <div className="stake-faq-maim-section">
      <article>
        <h2>FAQs</h2>
        <p>Here is a list of our Frequently Asked Questions</p>
      </article>
      <section className="stake-faq-img-container-section">
        <img src={FAQ1} alt="FAQ 1" />
        <img src={FAQ2} alt="FAQ 1" />
        <img src={FAQ3} alt="FAQ 1" />
        <img src={FAQ4} alt="FAQ 1" />
        <img src={FAQ5} alt="FAQ 1" />
      </section>
    </div>
  );
};

export default FAQ;
