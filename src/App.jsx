import "./App.css";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { Email } from "./Email";
import { OverView } from "./OverView";

function App() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isEmailOpen, setIsEmailOpen] = useState(false);
  const [isOverViewOpen, setIsOverViewOpen] = useState(false);

  return (
    <main>
      <div className="chat-container">
        <div className="message-list"></div>
        <form>
          <input></input>
          <button>送信</button>
        </form>
      </div>
      <div className="side-area">
        {isCalendarOpen ? <Calendar /> : null}
        {isEmailOpen ? <Email /> : null}
        {isOverViewOpen ? <OverView /> : null}
      </div>
    </main>
  );
}

export default App;
