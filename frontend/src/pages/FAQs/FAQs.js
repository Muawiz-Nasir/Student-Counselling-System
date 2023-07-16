import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const FAQPage = () => {
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is React Bootstrap?",
      answer:
        "React Bootstrap is a library of reusable UI components for React applications that are built on top of Bootstrap CSS framework.",
    },
    {
      question: "How to install React Bootstrap?",
      answer:
        "You can install React Bootstrap using npm or yarn. For example: npm install react-bootstrap",
    },
  ];

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <div className="container pt-4 pb-4">
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "10px"
      }}>
        <h4>FAQs</h4>
        <Button variant="default" size="sm" style={{ cursor: "pointer" }} onClick={handleGoBack}>
          Go Back
        </Button>
      </div>
      <Accordion>
        {faqData.map((faq, index) => (
          <Accordion.Item eventKey={index.toString()}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPage;
