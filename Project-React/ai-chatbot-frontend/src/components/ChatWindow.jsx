import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import InputBox from "./InputBox";
import { getGroqResponse } from "../api";

export default function ChatWindow() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello  I’m your AI assistant!" },
  ]);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const handleSend = async (text) => {
    const newMessages = [...messages, { sender: "user", text }];
    setMessages(newMessages);

    setTyping(true);

    const response = await getGroqResponse(
      newMessages.map((m) => ({
        role: m.sender === "user" ? "user" : "assistant",
        content: m.text,
      }))
    );

    setTyping(false);
    setMessages([...newMessages, { sender: "bot", text: response }]);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, typing]);

  return (
    <div className="chat-container">
      <div className="chat-header">AI Assistant</div>

      <div className="messages">
        {messages.map((m, i) => (
          <Message key={i} sender={m.sender} text={m.text} />
        ))}
        {typing && <Message sender="bot" typing={true} />}
        <div ref={messagesEndRef} />
      </div>

      <InputBox onSend={handleSend} />
    </div>
  );
}
