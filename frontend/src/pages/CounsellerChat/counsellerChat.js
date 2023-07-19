import { useEffect, useState } from "react";
import "./counsellerChat.css";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { SERVER_BASE_URL } from "../../config";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Modal } from "react-bootstrap";

const CounsellerChat = () => {
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [refetchMessages, setRefetchMessages] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);

  const [showAddFeedbackModal, setShowAddFeedbackModal] = useState(false);
  const [newFeedback, setNewFeedback] = useState({
    name: "",
    feedback: "",
  });

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  let { isLoading, isError, error, data } = useQuery(
    ["getChatData", refetchMessages],
    () =>
      axios.get(`${SERVER_BASE_URL}/chat`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
  );

  const sendMessage = async (message) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.post(
      `${SERVER_BASE_URL}/chat`,
      {
        message,
        userId: user.id, // RandomNumber To Avoid Conflicts
        chatId: selectedChat?.id || undefined,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };

  const addMessageMutation = useMutation(sendMessage, {
    onError: () => {
      toast("Something went wrong");
    },
    onSuccess: (response) => {
      console.log(response);
      setNewMessage("");
      setRefetchMessages(refetchMessages + 1);
    },
  });

  const handleAddNewMessage = (event) => {
    event.preventDefault();

    addMessageMutation.mutate(newMessage);
  };

  useEffect(() => {
    if (data) {
      console.log(data);
      let updatedChats = [...Object.values(data?.data)];
      setChatData(updatedChats);
      if (selectedChat) {
        setSelectedChat({
          ...selectedChat,
          messages: data?.data[selectedChat.id].messages,
        });
      }
    }
  }, [data]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');

    if(!token || role !== 'COUNSELLER' ){
      navigate("/");
    }
  }, [])

  const handleCloseFeedbackModal = () => setShowAddFeedbackModal(false);

  const handleChangeNewFAQ = (event) => {
    const { name, value } = event.target;
    setNewFeedback({
      ...newFeedback,
      [name]: value,
    });
  };

  const addNewFeedback = async (formData) => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await axios.post(
      `${SERVER_BASE_URL}/feedback`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  };


  const addFeedbackMutation = useMutation(addNewFeedback, {
    onError: () => {
      toast("Something went wrong");
    },
    onSuccess: (response) => {
      console.log(response);
      toast("Added new Feedback");
      setNewFeedback({
        name: "",
        feedback: "",
      });
      setShowAddFeedbackModal(false);
    },
  });

  const handleAddNewFeedback = (event) => {
    event.preventDefault();

    if(newFeedback?.name < 4 || !newFeedback?.feedback){
      return toast.error('Field values small')
    }

    addFeedbackMutation.mutate(newFeedback);
  };

  return (
    <>
      <nav>
    <ul>
      <li onClick={() => setShowAddFeedbackModal(true)}><Link>Add Feedback</Link></li>
      <li><Link to="/faq">FAQs</Link></li>
      <li onClick={() => {
            localStorage.clear()
            window.location.reload();
          }}><Link>Logout</Link></li>
    </ul>
  </nav>
  <div style={{ paddingTop: '20px' }}>
     <div className="chat-container">
      <div className="previous-chats">
        {/* <div className="new-chat-button">
          <button >Logout</button>
        </div> */}
        <div style={{
          maxHeight: "329px",
          overflow: "auto",
        }}>
        {chatData.map((chat) => {
          return (
            <div
              className={`chat ${selectedChat?.id === chat.id ? "active" : ""}`}
              onClick={() => setSelectedChat(chat)}
            >
              <div className="avatar"></div>
              <div className="chat-details">
                <p>{chat.messages[chat.messages.length - 1].message}</p>
              </div>
            </div>
          );
        })}
        </div>
      </div>
      <div className="opened-chat">
        {selectedChat && (
          <div className="chat-body">
            {selectedChat.messages.map((message) => (
              <div
                className={`message ${
                  message.sentById != user.id ? "received" : "sent"
                }`}
              >
                <p>{message.message}</p>
              </div>
            ))}
          </div>
        )}
        <div className="chat-input">
          <form onSubmit={handleAddNewMessage}>
            <input
              type="text"
              placeholder="Type your message..."
              onChange={(e) => setNewMessage(e.target.value)}
              value={newMessage}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
   </div>

   <Modal show={showAddFeedbackModal} onHide={handleCloseFeedbackModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddNewFeedback}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={newFeedback.name}
                onChange={handleChangeNewFAQ}
                placeholder="name here"
                minLength={5}
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Your feedback</Form.Label>
              <Form.Control
                type="text"
                name="feedback"
                minLength={5}
                value={newFeedback.feedback}
                onChange={handleChangeNewFAQ}
                placeholder="feedback here"
                autoFocus
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseFeedbackModal}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            onClick={handleAddNewFeedback}
          >
            Submit Feedback
          </Button>
        </Modal.Footer>
      </Modal>
    </>
   
  );
};

export default CounsellerChat;
