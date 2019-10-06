import React from "react";
import Header from "./components/Header";
import ReminderInput from "./components/ReminderInput";
import Reminders from "./components/Reminders";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Reminders />
        <ReminderInput/>
      </div>
    </div>
  );
}

export default App;
