import React, { useState } from 'react';
import { IoChatbubbleEllipses } from "react-icons/io5";

function Team() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, newMessage]);
    setNewMessage('');
  };

  return (
    <div className="board"><h4><strong>Chat <IoChatbubbleEllipses  size={40}/></strong></h4>
    <div className="messenger">
      <div className="message-list">
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <form onSubmit={handleMessageSubmit}>
        <input className="inputName"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button  className="create-button" type="submit">Send</button>
      </form>
    </div>
    </div>
  );
}

export default Team;
