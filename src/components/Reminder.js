import React from 'react';
import {useDispatch} from "react-redux";
import moment from 'moment';
import "./Reminder.css";

function Reminder({ data, index, style }) {
    const dispatch = useDispatch();
    const item = data[index];
    const reminderDuration = item.createdOn ? moment(item.createdOn).fromNow() : "today";
    function deleteReminder() {
        dispatch({
            type: "DELETE_REMINDER",
            payload: item.id
        });
    }
    return (
        <div style={style} className="Row">
            <div className="Row-content">
                <div className="Row-reminder-text">{item.text}</div>
                <div className="Row-reminder-duration">{reminderDuration}</div>
            </div>
            <div className="Row-delete" onClick={deleteReminder}>&times;</div>
        </div>
    );
}

export default Reminder;