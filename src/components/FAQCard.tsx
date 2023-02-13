import { faqList } from "../faq";
export const FAQCard = () => {
  return (
    <>
      <h1>FAQ</h1>
      <ul>
        {faqList.map(({ id, question, answer }) => (
          <li key={id}>
            <p>{question}</p>
            <p>{answer}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
