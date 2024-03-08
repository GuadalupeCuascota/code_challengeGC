"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
}
exports.default = Predictor;
