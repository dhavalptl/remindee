import React from 'react';
import Dropdown from "./Dropdown";
import Button from "./Button";
import "./ReminderInput.css";

const reminderDurationOptions = [{
    label: "Today",
    value: "today"
}, {
    label: "Tomorrow",
    value: "tomorrow"
}];

function ReminderInput() {
    function handleOnChange(selectedValue){
    }
    function addReminder(){
    }
    return (
        <footer className="Footer">
            <input type="text" className="Footer-input Input" placeholder="Enter reminder text"/>
            <div className="Footer-items">
            <Dropdown options={reminderDurationOptions} defaultValue={"today"} onChange={handleOnChange}/>
            <Button styleClassName="Btn-add" onClick={addReminder}>+</Button>
            </div>
        </footer>
    );
}

export default ReminderInput;