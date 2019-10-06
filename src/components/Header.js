import React from 'react';
import Dropdown from "./Dropdown";
import Button from "./Button";
import {useDispatch} from "react-redux";
import "./Header.css";

const reminderDurationOptions = [{
    label: "Today",
    value: "today"
}, {
    label: "Tomorrow",
    value: "tomorrow"
}];

function Header() {
    const dispatch = useDispatch();
    function handleOnChange(selectedValue){
    }
    function clearAllReminder(){
        dispatch({
            type: "CLAER_ALL_REMINDERS"
        });
    }
    return (
        <header className="Header">
            <div className="Header-title">Remindee</div>
            <div className="Header-items">
                <Dropdown options={reminderDurationOptions} defaultValue={"today"} onChange={handleOnChange}/>
                <Button onClick={clearAllReminder}>Clear All</Button>
            </div>
        </header>
    );
}

export default Header;