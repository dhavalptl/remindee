import React from 'react';
import {useSelector} from "react-redux";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import Reminder from "./Reminder";
import "./Reminders.css";

function Reminders() {
    const reminders = useSelector((state) => state.reminderReducer);
    if(reminders.length === 0){
      return <main className="Content">
        <div className="No-row">No reminders to show :)</div>
      </main>
    }
    return (
      <main className="Content">
        <AutoSizer>
          {({ height, width }) => (
            <List
              className="List"
              height={height}
              itemCount={reminders.length}
              itemSize={40}
              itemData={reminders}
              width={width}
            >
              {Reminder}
            </List>
          )}
        </AutoSizer>
      </main>
    );
}

export default Reminders;