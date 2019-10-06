import React from 'react';
import Button from "./Button";
import {useDispatch} from "react-redux";
import "./Header.css";

function Header() {
    const dispatch = useDispatch();
    function clearAllReminder(){
        dispatch({
            type: "CLAER_ALL_REMINDERS"
        });
    }
    return (
        <header className="Header">
            <div className="Header-title">Remindee</div>
            <div className="Header-items">
                <Button onClick={clearAllReminder}>Clear All</Button>
            </div>
        </header>
    );
}

export default Header;