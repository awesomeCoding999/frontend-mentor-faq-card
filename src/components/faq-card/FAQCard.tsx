import { useState } from "react";
import { faqList } from "../../faq";
import arrowIcon from "../../images/icon-arrow-down.svg";
import womanAtDeskLarge from "../../images/illustration-woman-online-desktop.svg";
import womanAtDeskSmall from "../../images/illustration-woman-online-mobile.svg";
import illustrationBox from "../../images/illustration-box-desktop.svg";
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
    <main>
      <div className="faq-card">
        <img src={illustrationBox} alt="" className="illustration-box" />
        <picture>
          <source media="(min-width: 64em)" srcSet={womanAtDeskLarge} />
          <img
            className="woman-at-desk-img"
            src={womanAtDeskSmall}
            alt="woman at desk"
          />
        </picture>

        <div className="card-container">
          <h1 className="title">FAQ</h1>
          <ul className="faq-items">
            {faqList.map(({ id, question, answer }) => (
              <li className="faq" key={id}>
                <div className="question-container">
                  <button
                    className={`question arrow-btn ${
                      activeFAQ === id ? "active-question" : ""
                    }`}
                    id={id}
                    onClick={toggleAnswer}
                  >
                    {question}
                  </button>

                  <img
                    className={`arrow-icon ${
                      activeFAQ === id ? "rotate-icon-up" : ""
                    }`}
                    src={arrowIcon}
                    alt="arrow icon"
                  />
                </div>
                <p
                  className={`
                  ${activeFAQ === id ? "show" : "hide"}-answer
               `}
                >
                  {answer}
                </p>
                <hr className="divider" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
