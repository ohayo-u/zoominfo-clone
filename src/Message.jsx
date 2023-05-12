import zoominfoAvatar from "./images/zoominfoAvatar.png";
import { Avatar, Divider } from "@mui/material";
import { UserAvatar } from "./UserAvatar";

export function Message({ message, messages }) {
  const avatar =
    message.sender === "zoominfo" ? (
      <Avatar src={zoominfoAvatar} />
    ) : (
      <UserAvatar />
    );

  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        {avatar}
        {message.content}
      </div>
      {!(message.id === messages.length) && <Divider />}
    </>
  );
}
