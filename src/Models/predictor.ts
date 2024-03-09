export class Predictor {

    plate_number: string
    date: string
    hour: string

    constructor(plate_number: string, date: string, hour: string) {
        this.plate_number = plate_number,
            this.date = date,
            this.hour = hour
    }

    getDay(date = new Date(), locale = 'es-ES') {
        return date.toLocaleDateString(locale, { weekday: 'long' });
    }

    getlastDigit(plate_number: string) {
        return plate_number.slice(-1);
    }

    gethour(hour: string) {
        let date = new Date(`01/01/2022 ${hour}`);
        let formattedTime = date.toLocaleTimeString('en-US',
            { hour12: false });
        return formattedTime;
    }
}