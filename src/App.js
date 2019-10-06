import React from "react";
import Header from "./components/Header";
import Statistics from "./components/Statistics";
import ReminderInput from "./components/ReminderInput";
import Reminders from "./components/Reminders";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-content">
        <Header />
        <Statistics />
        <Reminders />
        <ReminderInput/>
      </div>
    </div>
  );
}

export default App;
