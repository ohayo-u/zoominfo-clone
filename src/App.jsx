import { useEffect, useState } from "react";
import { Calendar } from "./Calendar";
import { Email } from "./Email";
import { OverView } from "./OverView";
import { Message } from "./Message";
import { Paragraph } from "./Paragraph";
import { OptionButton } from "./OptionButton";
import { Header } from "./Header";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";

import {
  Paper,
  TextField,
  ButtonGroup,
  IconButton,
  CssBaseline,
  Grid,
  Stack,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SendIcon from "@mui/icons-material/Send";

function App() {
  const theme = createTheme({
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
    typography: {
      fontFamily: ["sans-serif"].join(","),
    },
    palette: {
      primary: {
        main: "#0a4cee",
      },
      background: {
        message: "#f5f6fb",
      },
    },
  });
  const [optionButtonsAreOpen, setOptionButtonsAreOpen] = useState(true);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "user",
      content: <Paragraph sender="user">Optimize my day</Paragraph>,
    },
    {
      id: 2,
      sender: "zoominfo",
      content: (
        <Paragraph
          sender="zoominfo"
          sx={{ bgcolor: theme.palette.background.message }}
        >
          Good morning!Based on your calendar...
        </Paragraph>
      ),
    },
  ]);
  const [cliant, setCliant] = useState();
  const [sideAreaContent, setSideAreaContent] = useState(null);

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
    content: <Paragraph sender="user">Show me top 3 contacts</Paragraph>,
  };

  const newZoominfoMessage = {
    id: 4,
    sender: "zoominfo",
    content: (
      <div>
        {recomendedContacts.map((contact) => {
          const cliantProfile = contact.cliant;
          return (
            <Paragraph
              sender="zoominfo"
              sx={{ backgroundColor: theme.palette.background.message }}
              key={cliantProfile.id}
            >
              <p>
                <span
                  style={{
                    color: theme.palette.primary.main,
                    cursor: "pointer",
                  }}
                  onClick={() => nameClick(cliantProfile.id)}
                >
                  {cliantProfile.name}
                </span>
                ,{cliantProfile.position}
              </p>
              <p>{contact.explanation}</p>
              <ButtonGroup variant="text" aria-label="text button group">
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
                    <Button onClick={onClickEvent}>{option.content}</Button>
                  );
                })}
              </ButtonGroup>
            </Paragraph>
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

  const ScrollToBottom = () => {
    const element = document.getElementById("bottom");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
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
  useEffect(() => {
    ScrollToBottom();
  }, [messages.length]);

  return (
    <main>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Paper
          elevation={3}
          sx={{
            width: "1400px",
            height: "700px",
            m: "10px auto",
            pb: "100px",
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Grid container alignItems="center" justify="center">
            <Grid
              item
              xs={sideArea ? 8 : 12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Stack
                sx={{
                  width: "800px",
                  overflow: "scroll",
                  height: "550px",
                }}
              >
                {messages.map((message) => {
                  return (
                    <Message
                      key={message.id}
                      message={message}
                      messages={messages}
                    />
                  );
                })}
                {optionButtonsAreOpen ? (
                  <div style={{ marginLeft: "90px" }}>
                    <OptionButton onClick={() => optionClick()}>
                      Show me top 3 contacts
                    </OptionButton>
                    <OptionButton>Block time to follow-up</OptionButton>
                    <OptionButton>Help me prospect</OptionButton>
                  </div>
                ) : null}
                <div id="bottom" />
              </Stack>
              <TextField
                fullWidth
                margin="normal"
                sx={{ width: "800px" }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <SendIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={sideArea ? 4 : 0}>
              {sideArea}
            </Grid>
          </Grid>
        </Paper>
      </ThemeProvider>
    </main>
  );
}

export default App;
