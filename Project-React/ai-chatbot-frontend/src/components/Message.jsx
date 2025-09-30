import botAvatar from "../assets/bot.jpg";
import userAvatar from "../assets/user.jpeg";

export default function Message({ sender, text, typing }) {
  return (
    <div className="message-wrapper" style={{ flexDirection: sender === "user" ? "row-reverse" : "row" }}>
      <img className="avatar" src={sender === "user" ? userAvatar : botAvatar} alt="avatar" />
      <div className={`message ${sender}`}>
        {typing ? (
          <div className="typing">
            <span></span><span></span><span></span>
          </div>
        ) : text}
      </div>
    </div>
  );
}