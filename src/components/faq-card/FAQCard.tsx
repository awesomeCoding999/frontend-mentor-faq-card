import { useState } from "react";
import { faqList } from "../../faq";
import arrowIcon from "../../images/icon-arrow-down.svg";
import womanAtDeskLarge from "../../images/illustration-woman-online-desktop.svg";
import womanAtDeskSmall from "../../images/illustration-woman-online-mobile.svg";
import "./FAQCard.css";

export const FAQCard = () => {
  const [activeFAQ, setActiveFAQ] = useState<string | null>("faq-2");

  const toggleAnswer = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    let currId: string = e.currentTarget.id;
    if (activeFAQ === currId) {
      setActiveFAQ(null);
      return;
    }

    setActiveFAQ(currId);
  };

  return (
    <div className="faq-card">
      <picture>
        <source media="(min-width: 64em)" srcSet={womanAtDeskLarge} />
        <img
          className="woman-at-desk-img"
          src={womanAtDeskSmall}
          alt="woman at desk"
        />
      </picture>
      <div className="card-container">
        <h1>FAQ</h1>
        <ul>
          {faqList.map(({ id, question, answer }) => (
            <li className="faq" key={id}>
              <div className="question-container">
                <p>{question}</p>
                <button className="arrow-btn" id={id} onClick={toggleAnswer}>
                  <img
                    className={`${activeFAQ === id ? "rotate-icon-up" : ""}`}
                    src={arrowIcon}
                    alt="arrow icon"
                  />
                </button>
              </div>
              <p
                className={`${
                  activeFAQ === id ? "show-answer" : "hide-answer"
                }`}
              >
                {answer}
              </p>
              <hr />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
