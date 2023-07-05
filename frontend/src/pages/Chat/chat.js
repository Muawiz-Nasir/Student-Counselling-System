import { useEffect, useState } from "react";
import AuthenticatedStudentPagesLayout from "../../components/AuthenticatedStudentPagesLayout";
import "./chat.css";
import { useMutation, useQuery } from "react-query";
import axios from "axios";
import { SERVER_BASE_URL } from "../../config";
import { toast } from "react-toastify";

const Chat = () => {
  const [chatData, setChatData] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [refetchMessages, setRefetchMessages] = useState(0);
  const [selectedChat, setSelectedChat] = useState(null);

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"))

  let { isLoading, isError, error, data } = useQuery(["getChatData", refetchMessages], () =>
    axios.get(`${SERVER_BASE_URL}/chat/mine`, {
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
        userId: user.id,
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
     setNewMessage('');
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
      if(selectedChat){
        setSelectedChat({
            ...selectedChat,
            messages : data?.data[selectedChat.id].messages
        });
      }
    }
  }, [data]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data?.data) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <AuthenticatedStudentPagesLayout>
      <div className="chat-container">
        <div className="previous-chats">
          <div className="new-chat-button">
            <button onClick={() => setSelectedChat(null)}>Add New Chat</button>
          </div>
          {chatData.map((chat) => {
            return (
              <div className={`chat ${selectedChat?.id === chat.id ? 'active' : ''}`} onClick={() => setSelectedChat(chat)}>
                <div className="avatar"></div>
                <div className="chat-details">
                  <p>{chat.messages[chat.messages.length-1].message}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="opened-chat">
          {selectedChat && (
            <div className="chat-body">
              {selectedChat.messages.map((message) => (
                <div className={`message ${message.sentById === user.id ? 'sent' : 'received'}`}>
                  <p>{message.message}</p>
                </div>
              ))}
            </div>
          )}
          <div className="chat-input">
            <form onSubmit={handleAddNewMessage}>
            <input type="text" placeholder="Type your message..." onChange={(e) => setNewMessage(e.target.value)} value={newMessage}/>
            <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </AuthenticatedStudentPagesLayout>
  );
};

export default Chat;
