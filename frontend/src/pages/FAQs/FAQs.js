import axios from "axios";
import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_URL } from "../../config";

const FAQPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const getFAQs = () => axios.get(`${SERVER_BASE_URL}/faqs`);

  const faqsQuery = useQuery("faqsData", () => getFAQs());

  if (faqsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if(faqsQuery.isError){
    return <div>Something went wrong...</div>;
  };

  console.log(faqsQuery);

  return (
    <div className="container pt-4 pb-4">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        <h4>FAQs</h4>
        <Button
          variant="default"
          size="sm"
          style={{ cursor: "pointer" }}
          onClick={handleGoBack}
        >
          Go Back
        </Button>
      </div>
      <Accordion>
        {faqsQuery?.data?.data?.map((faq, index) => (
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
