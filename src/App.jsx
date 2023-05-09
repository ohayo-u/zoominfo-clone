import "./App.scss";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { Email } from "./Email";
import { OverView } from "./OverView";
import { Message } from "./Message";

function App() {
  const [optionButtonsAreOpen, setOptionButtonsAreOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      content: (
        <div>
          <p>Optimize my day</p>
        </div>
      ),
    },
    {
      id: 2,
      sender: "zoominfo",
      content: (
        <div>
          <p>Good morning!Based on your calendar...</p>
        </div>
      ),
    },
  ]);
  const [sideAreaContent, setSideAreaContent] = useState(null);
  const [cliant, setCliant] = useState();

  const cliantProfiles = [
    {
      id: 1,
      name: "Rob Spence",
      position: "Risk & Compliance Vice President at RGP",
      phoneNumber: "(202)280-9121",
      email: "robxxx.com",
    },
    {
      id: 2,
      name: "Lindsey Lucas",
      position: "Head  of IT at CyberArk",
      phoneNumber: "(202)280-9122",
      email: "lindseyxxx.com",
    },
    {
      id: 3,
      name: "Mark Moery",
      position: "Vice President of IT at Evolent Health",
      phoneNumber: "(202)280-9123",
      email: "markxxx.com",
    },
  ];

  const recomendedContacts = [
    {
      cliant: cliantProfiles[0],
      explanation: "Rob was your champion...",
      contactOptions: [
        { kind: "send-a-email", content: "Congratulate Rob via email" },
        { kind: "others", content: "Show RGP Activity feed" },
      ],
    },
    {
      cliant: cliantProfiles[1],
      explanation: "CyberArk, an IT security solution company...",
      contactOptions: [
        { kind: "block-time", content: "Block time to call Lindsey" },
        { kind: "others", content: "Show Cyber Ark Buying committee" },
        { kind: "others", content: "Add Lindsey to Salesflow" },
      ],
    },
    {
      cliant: cliantProfiles[2],
      explanation: "Evolent Health, a healthcare solution provider,...",
      contactOptions: [
        { kind: "block-time", content: "Block time to call Mark" },
        { kind: "others", content: "Companies with same ICP" },
        { kind: "others", content: "Request Aircover" },
      ],
    },
  ];

  const newUserMessage = {
    id: 3,
    sender: "user",
    content: (
      <div>
        <p>Show me top 3 contacts</p>
      </div>
    ),
  };

  const newZoominfoMessage = {
    id: 4,
    sender: "zoominfo",
    content: (
      <div>
        {recomendedContacts.map((contact) => {
          const cliantProfile = contact.cliant;
          return (
            <div className="message-content" key={cliantProfile.id}>
              <p>
                <span
                  className="name"
                  onClick={() => nameClick(cliantProfile.id)}
                >
                  {cliantProfile.name}
                </span>
                ,{cliantProfile.position}
              </p>
              <p>{contact.explanation}</p>
              {contact.contactOptions.map((option) => {
                let onClickEvent;
                if (option.kind === "send-a-email") {
                  onClickEvent = () => emailClick(cliantProfile.id);
                } else if (option.kind === "block-time") {
                  onClickEvent = () => calendarClick(cliantProfile.id);
                } else {
                  null;
                }
                return (
                  <button className="option-button" onClick={onClickEvent}>
                    {option.content}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>
    ),
  };

  const optionClick = () => {
    setOptionButtonsAreOpen(false);
    const newMessages = [...messages, newUserMessage, newZoominfoMessage];
    setMessages(newMessages);
  };

  const findClickedCliant = (id) => {
    const clickedCliant = cliantProfiles.find((profile) => {
      return profile.id === id;
    });
    setCliant(clickedCliant);
  };

  const nameClick = (id) => {
    findClickedCliant(id);
    setSideAreaContent("overView");
  };
  const emailClick = (id) => {
    findClickedCliant(id);
    setSideAreaContent("email");
  };
  const calendarClick = (id) => {
    findClickedCliant(id);
    setSideAreaContent("calendar");
  };

  let sideArea;
  if (sideAreaContent === "calendar") {
    sideArea = (
      <Calendar cliant={cliant} setSideAreaContent={setSideAreaContent} />
    );
  } else if (sideAreaContent === "email") {
    sideArea = (
      <Email cliant={cliant} setSideAreaContent={setSideAreaContent} />
    );
  } else if (sideAreaContent === "overView") {
    sideArea = (
      <OverView cliant={cliant} setSideAreaContent={setSideAreaContent} />
    );
  } else {
    sideArea = null;
  }

  return (
    <main>
      <div className="chat-container">
        <div className="message-list">
          {messages.map((message) => {
            return <Message key={message.id} message={message} />;
          })}
        </div>
        {optionButtonsAreOpen ? (
          <div className="option-buttons">
            <button onClick={() => optionClick()}>
              Show me top 3 contacts
            </button>
            <button>Block time to follow-up</button>
            <button>Help me prospect</button>
          </div>
        ) : null}
        <form>
          <input></input>
          <button>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
      {sideArea}
    </main>
  );
}

export default App;
