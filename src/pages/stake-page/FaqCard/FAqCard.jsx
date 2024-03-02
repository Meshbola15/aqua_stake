import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import React, { useRef, useState } from "react";
import "../widgets/main/AquaMain.css";

const FaqCard = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const FaqController = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="aqua-stake-faq-section-container">
      <h2 className="aqua-stake-faq-header">FAQ</h2>

      <section className="FAQ">
        {faqData.map((item, index) => (
          <div
            onClick={() => FaqController(index)}
            key={index}
            className="aqua-faq-section-main"
          >
            <div className="aqua-stake-faq-card-section">
              <div className="aqua-stake-faq-card-text-header">
                <h4>{item.question}</h4>
                {openIndex === index ? (
                  <IoIosArrowUp size={20} color="white" />
                ) : (
                  <IoIosArrowDown size={20} color="white" />
                )}
              </div>
              {openIndex === index && (
                <div className="aqua-stake-faq-card-text-container">
                  <div>
                    {item.answer.map((item, index) => (
                      <p>{item}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqCard;
