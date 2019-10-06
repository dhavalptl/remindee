import uuid from "uuid/v4";
import moment from "moment";

const initialState = [{
    id: uuid(),
    text: "Buy toys",
    createdOn: moment().toDate()
}, {
    id: uuid(),
    text: "Learn K8s"
}];
export default function ReminderReducer(state=initialState, action) {
    switch (action.type) {
        case "ADD_REMINDER":
            return [...state, action.payload]
        case "DELETE_REMINDER":
            return state.filter(reminder => reminder.id !== action.payload)
        case "CLAER_ALL_REMINDERS":
            return [];
        default:
            return state;
    }
}