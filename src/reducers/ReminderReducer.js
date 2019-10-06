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
    return state;
}