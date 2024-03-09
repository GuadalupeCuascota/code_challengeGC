"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Predictor = void 0;
class Predictor {
    constructor(plate_number, date, hour) {
        this.plate_number = plate_number,
            this.date = date,
            this.hour = hour;
    }
    getDay(date = new Date(), locale = 'es-ES') {
        return date.toLocaleDateString(locale, { weekday: 'long' });
    }
    getlastDigit(plate_number) {
        return plate_number.slice(-1);
    }
    gethour(hour) {
        let date = new Date(`01/01/2022 ${hour}`);
        let formattedTime = date.toLocaleTimeString('en-US', { hour12: false });
        return formattedTime;
    }
}
exports.Predictor = Predictor;
