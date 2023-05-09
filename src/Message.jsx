import zoominfoAvatar from "./images/zoominfoAvatar.png";
import userAvatar from "./images/userAvatar.png";

export function Message({ message }) {
  return (
    <div className="message">
      <img
        className="avatar-image"
        src={message.sender === "zoominfo" ? zoominfoAvatar : userAvatar}
      ></img>
      {message.content}
    </div>
  );
}
