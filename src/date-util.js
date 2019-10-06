import moment from "moment";

export const durationFilter = {
    today: 0,
    tomorrow: 1,
    weekly: 7
};

export function getFormattedDate(date, format = "YYYY-MM-DD") {
    return moment(date).format(format);
}

export function getReminders(reminders, duration = 0) {
    const todayDate = getFormattedDate(new Date());
    return reminders.filter(reminder => moment(reminder.createdOn).diff(todayDate, "days") <= duration)
}