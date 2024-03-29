import {isMailValid, isPhoneValid} from "../../utils";

const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function getYearsListFromServerResponse(serverResponse, currentYear) {
    const TEMP_years = [];
    for (const i_year in serverResponse.message) {
        TEMP_years.push({
            title: i_year,
            link: '/orders/' + i_year,
            isCurrent: Number(i_year) === Number(currentYear)
        })
    }
    return TEMP_years;
}

export function getMonthsListFromServerResponse(serverResponse, currentYear, currentMonth) {
    const data = serverResponse.message;
    const TEMP_months = [];
    for (const i_year in data) {
        if (Number(i_year) === Number(currentYear)) {
            for (const i_month in data[i_year]) {
                TEMP_months.push({
                    title: i_month + '/' + i_year + ' - ' + data[i_year][i_month].name,
                    link: '/orders/' + i_year + '/' + i_month,
                    isCurrent: Number(i_month) === Number(currentMonth)
                });
            }
        }
    }
    return TEMP_months;
}

export function getDaysListFromServerResponse(serverResponse, currentYear, currentMonth, currentDay) {
    const data = serverResponse.message;
    const TEMP_days = [];
    for (const i_year in data) {
        if (Number(i_year) === Number(currentYear)) {
            for (const i_month in data[i_year]) {
                if (Number(i_month) === Number(currentMonth)) {
                    for (const i_day in data[i_year][i_month]['days']) {
                        TEMP_days.push({
                            title: i_day + '/' + i_month + '/' + i_year + ' - ' + data[i_year][i_month]['days'][i_day].name,
                            link: '/orders/' + i_year + '/' + i_month + '/' + i_day,
                            isCurrent: Number(i_day) === Number(currentDay)
                        });
                    }
                }
            }
        }
    }
    return TEMP_days;
}

export function getDayName(j_year, j_month, j_day) {
    if (!j_year || !j_month || !j_day) return;
    const date = new Date();
    date.setFullYear(j_year);
    date.setMonth(j_month - 1);
    date.setDate(j_day);
    return DAYS[date.getDay()];
}

export function getMonthName(j_month) {
    if (!j_month) return;
    return MONTHS[j_month - 1];
}


export function isOrderValid(order) {
    return order.first_name && order.first_name.trim().length > 0 &&
        order.last_name && order.last_name.trim().length > 0 &&
        order.phone && isPhoneValid(order.phone) &&
        order.email && isMailValid(order.email)
}

export function getOrderMissingParams(order) {
    const errors = [];
    if (!order.first_name || order.first_name.trim().length === 0) errors.push("first name")
    if (!order.last_name || order.last_name.trim().length === 0) errors.push("last name")
    if (!order.phone || !isPhoneValid(order.phone)) errors.push("phone number")
    if (!order.email || !isMailValid(order.email)) errors.push("email address")
    return JSON.stringify(errors)
        .replace(/"/g, "")
        .replace('[', '')
        .replace(']', '')
        .replace(/,/g, ", ")
        .replace(/,([^,]*)$/, ' and $1');
}
