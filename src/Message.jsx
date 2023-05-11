import zoominfoAvatar from "./images/zoominfoAvatar.png";
import userAvatar from "./images/userAvatar.png";
import { Avatar, Divider } from "@mui/material";

export function Message({ message, messages }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Avatar
          alt="avatar image"
          src={message.sender === "zoominfo" ? zoominfoAvatar : userAvatar}
          sx={{ m: "20px" }}
        />
        {message.content}
      </div>
      {!(message.id === messages.length) && <Divider />}
    </>
  );
}
