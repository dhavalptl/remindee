const initialState = {
    durationFilter: 7,
    reminders: []
};
export default function ReminderReducer(state=initialState, action) {
    switch (action.type) {
        case "ADD_REMINDER":
            return {...state, reminders: [...state.reminders, action.payload]};
        case "DELETE_REMINDER":
            return {...state, reminders: state.reminders.filter(reminder => reminder.id !== action.payload)};
        case "CLAER_ALL_REMINDERS":
            return {...state, reminders: []};
        case "DURATION_FILTER":
            return {...state, durationFilter: action.payload};
        default:
            return state;
    }
}