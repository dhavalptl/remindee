import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {getReminders, durationFilter} from "../date-util";
import "./Statistics.css";

function Statistics() {
    const reminders = useSelector(state => state.reminderReducer.reminders);
    const dispatch = useDispatch();
    const todayReminders = getReminders(reminders, durationFilter.today).length;
    const tomorrowReminders = getReminders(reminders, durationFilter.tomorrow).length;
    const weeklyReminders = getReminders(reminders, durationFilter.weekly).length;
 
    function setDuration(duration){
        dispatch({
            type: "DURATION_FILTER",
            payload: duration
        });
    }

    return (
      <div className="Statistics">
          <div className="Statistics-item" onClick={() => setDuration(durationFilter.today)}>
              <div className="Statistics-item-content">
                <div>Today</div>
                <div className="Statistics-item-count">{todayReminders}</div>
              </div>
          </div>
          <div className="Statistics-item" onClick={() => setDuration(durationFilter.tomorrow)}>
            <div className="Statistics-item-content">
              <div>Tomorrow</div>
              <div className="Statistics-item-count">{tomorrowReminders}</div>
            </div>
          </div>
          <div className="Statistics-item" onClick={() => setDuration(durationFilter.weekly)}>
            <div className="Statistics-item-content">
              <div>Weekly</div>
              <div className="Statistics-item-count">{weeklyReminders}</div>
            </div>
          </div>
      </div>
    );
}

export default Statistics;