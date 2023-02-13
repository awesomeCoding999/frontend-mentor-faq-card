import { useState } from "react";
import { faqList } from "../../faq";
import arrowIcon from "../../../public/images/icon-arrow-down.svg";

export const FAQCard = () => {
  const [activeFAQ, setActiveFAQ] = useState<string>("faq-2");
  return (
    <div className="faq-card">
      <h1>FAQ</h1>
      <ul>
        {faqList.map(({ id, question, answer }) => (
          <li className="faq" key={id}>
            <div className="question-container">
              <p>{question}</p>
              <button>
                <img src={arrowIcon} alt="arrow icon" />
              </button>
            </div>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
