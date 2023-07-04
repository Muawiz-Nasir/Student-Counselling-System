import './chat.css';

const Chat = () => {
    return <div className="chat-container">
        <div className="chat-header">
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
        </div>
        <div className="chat-input">
            <input type="text" placeholder="Type your message..." />
            <button>Send</button>
        </div>
    </div>
}

export default Chat;