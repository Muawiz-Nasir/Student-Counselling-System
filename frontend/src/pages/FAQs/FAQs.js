import axios from "axios";
import React, { useMemo, useState } from "react";
import { Accordion, Card, Button } from "react-bootstrap";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { SERVER_BASE_URL } from "../../config";
import { toast } from "react-toastify";

const FAQPage = () => {
  const [refetchFAQs, setRefetchFAQs] = useState(0);

  const navigate = useNavigate();

  const userRole = useMemo(() => {
    const role = localStorage.getItem("role");
    return role;
  }, []);

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  const getFAQs = () => axios.get(`${SERVER_BASE_URL}/faqs`);

  const faqsQuery = useQuery(["faqsData", refetchFAQs], () => getFAQs());

  const deleteFAQ = async (id) => {
    const token = localStorage.getItem("token");
  
    const response = await axios.delete(
      `${SERVER_BASE_URL}/faqs/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const deleteFAQMutation = useMutation(deleteFAQ, {
    onError: () => {
      toast("Something went wrong");
    },
    onSuccess: (response) => {
      setRefetchFAQs(refetchFAQs + 1);
      toast("FAQ deleted");
    },
  });

  if (faqsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (faqsQuery.isError) {
    return <div>Something went wrong...</div>;
  }

  const handleDeleteFAQ = (id, event) => {
    event.stopPropagation(); // Prevent event propagation
    deleteFAQMutation.mutate(id);
  };

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
            <Accordion.Header>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  paddingRight: "10px",
                }}
              >
                {faq.question}
                {userRole === "ADMIN" && (
                  <Button
                    size="sm"
                    variant="outline-danger"
                    onClick={(event) => handleDeleteFAQ(faq.id, event)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQPage;
