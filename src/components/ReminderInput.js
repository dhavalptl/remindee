import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import uuid from "uuid/v4";
import moment from "moment";
import "./ReminderInput.css";

function ReminderInput() {
    const [text, setText] = useState("");
    const [startReminder, setStartReminder] = useState(moment().toDate());
    const dispatch = useDispatch();
    const formattedDuration = moment(startReminder).format("YYYY-MM-DD");
    function onKeyPressOnText(event) {
        if(event.key === 'Enter'){
            addReminder();
        }
    }
    function addReminder(){
        if(!text || !startReminder) {
            return;
        }
        dispatch({
            type: "ADD_REMINDER",
            payload: {
                id: uuid(),
                text,
                createdOn: startReminder
            }
        });
        setText("");
    }
    return (
        <footer className="Footer">
            <input type="text" value={text} className="Footer-input Input" onKeyPress={onKeyPressOnText} placeholder="Enter reminder text" onChange={({target}) => setText(target.value)}/>
            <div className="Footer-items">
                <input type="date" value={formattedDuration} onChange={({target}) => setStartReminder(target.value)}/>
            </div>
        </footer>
    );
}

export default ReminderInput;