import React from 'react';
import Dropdown from "./Dropdown";
import Button from "./Button";
import "./Header.css";

const reminderDurationOptions = [{
    label: "Today",
    value: "today"
}, {
    label: "Tomorrow",
    value: "tomorrow"
}];

function Header() {
    function handleOnChange(selectedValue){
    }
    return (
        <header className="Header">
            <div className="Header-title">Remindee</div>
            <div className="Header-items">
                <Dropdown options={reminderDurationOptions} defaultValue={"today"} onChange={handleOnChange}/>
                <Button>Clear All</Button>
            </div>
        </header>
    );
}

export default Header;