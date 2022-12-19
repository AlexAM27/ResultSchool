import { MONTHS_NAMES } from "./constants";

export function formatDay(day) {
    let ending;
    switch(day) {
        case 1 || 21 || 31:
            ending = 'st';
            break;
        case 2 || 22:
            ending = 'nd';
            break;
        case 3 || 23:
            ending = 'rd';
            break;
        default:
            ending = 'th';
    }
    return day + ending;
}

export function formatDate(date) {
    return `${MONTHS_NAMES[date.getMonth()]} ${formatDay(date.getDate())} ${date.getFullYear()} ${date.toLocaleTimeString()}`;
}


export function getNumericAmount(str) {
    return Number(str.replace('$', ''));
}