import { useState } from 'react';
import AuthenticatedStudentPagesLayout from '../../components/AuthenticatedStudentPagesLayout';
import './chat.css';

const Chat = () => {
    const [selectedChat, setSelectedChat] = useState(null);

    const chats = [{
        id: 1,
        title: "Helloo",
        messages: [{
            message: "hello",
            sentBy: '123'
        },
        {
            message: "hello",
            sentBy: '1'
        }
    ]
    },

    {
        id: 12,
        title: "Helloo 2",
        messages: [{
            message: "hello2",
            sentBy: '1'
        },
        {
            message: "hello gjh",
            sentBy: '1'
        }
    ]
    }
];

    return <AuthenticatedStudentPagesLayout>
    <div className="chat-container">
        <div className="previous-chats">
        <div className="new-chat-button">
                <button onClick={() => setSelectedChat(null)}>Add New Chat</button>
            </div>
            {
                chats.map((chat) => {
                    return <div className="chat" onClick={() => setSelectedChat(chat)}>
                    <div className="avatar"></div>
                    <div className="chat-details">
                        <p>{chat.title}</p>
                    </div>
                </div>
                })
            }

        </div>
        <div className="opened-chat">
           {
            selectedChat &&  <div className="chat-body">
            {/* <div className="message received">
                <p>Hello! How can I assist you today?</p>
            </div>
            <div className="message sent">
                <p>I have a question about the project.</p>
            </div>
            <div className="message sent">
                <p>I have a question about the project.</p>
            </div> */}

            {
                selectedChat.messages.map(message => <div className="message received">
                <p>{message.message}</p>
            </div>)
            }
        </div>
           }
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </div>
        </div>

    </div>
    </AuthenticatedStudentPagesLayout>
    
}

export default Chat;
