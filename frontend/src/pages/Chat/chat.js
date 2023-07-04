import './chat.css';

const Chat = () => {
    return <div className="chat-container">
          <div className="new-chat-button">
                <button>Add New Chat</button>
            </div>
        <div className="previous-chats">
            <div className="chat">
                <div className="avatar"></div>
                <div className="chat-details">
                    <h3>John Doe</h3>
                    <p>Last message received...</p>
                </div>
            </div>
            <div className="chat active">
                <div className="avatar"></div>
                <div className="chat-details">
                    <h3>Jane Smith</h3>
                    <p>Last message sent...</p>
                </div>
            </div>
            {/* <!-- More previous chats --> */}
        </div>
        <div className="opened-chat">
            <div className="chat-header">
                <h2>Jane Smith</h2>
            </div>
            <div className="chat-body">
                <div className="message received">
                    <p>Hello! How can I assist you today?</p>
                </div>
                <div className="message sent">
                    <p>I have a question about the project.</p>
                </div>
                {/* <!-- More chat messages --> */}
            </div>
            <div className="chat-input">
                <input type="text" placeholder="Type your message..." />
                <button>Send</button>
            </div>
        </div>

    </div>

    // </div>
}

export default Chat;
{/* <div className="chat-header">
            <h2>Chat</h2>
        </div>
        <div className="chat-body">
            <div className="message-received">
                <p>Hello! How can I assist you today?</p>
            </div>
            <div className="message-sent">
                <p>I have a question about course registration.</p>
            </div>
            <div className="message-received">
                <p>Sure, I'd be happy to help. What specifically do you need assistance with?</p>
            </div>
            {/* <!-- More messages --> */}
{/* </div>
        <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
        // </div> */}
{/* <div className="chat-container"> */ }