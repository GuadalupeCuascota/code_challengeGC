
class Predictor {
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



//Method for verify beak and plate

function getPredictor() {
    if (typeof document !== 'undefined') {
        const plate_number = document.getElementById('plate_number') as HTMLInputElement
        const date = document.getElementById('date') as HTMLInputElement
        const time = document.getElementById('hour') as HTMLInputElement

    
        // We should use this format for date (mm/dd/AAAA).

        const predictor = new Predictor(plate_number.value, date.value, time.value);
        let day = predictor.getDay(new Date(predictor.date));
        let lastdigit = predictor.getlastDigit(predictor.plate_number)
        let hour = predictor.gethour(predictor.hour)

        
        const feriados = {
            "01/01/2024": "Año nuevo",
            "12/25/2024": "Navidad",
            "05/01/2024": "Dia del trabajador",
            "11/02/2024": "Dia de los difuntos",
            "02/12/2024": "Carnaval",
            "02/13/2024": "Carnaval",
        }

        const validation = Object.keys(feriados).indexOf(predictor.date);

        if (((hour > '05:59') && (hour < '09:31')) || (hour > '15:59') && (hour > '21:01')) {

            if (validation < 0) {
                switch (day) {
                    case 'lunes':
                        if ((lastdigit == "1" || lastdigit == "2")) {
                            window.alert('THE CAR CAN NOT BE ON THE ROAD.');
                        } else {
                            window.alert('THE CAR CAN BE ON THE ROAD.');
                        }
                        break;
                    case 'martes':
                        if ((lastdigit == "3" || lastdigit == "4")) {
                            window.alert('THE CAR CAN NOT BE ON THE ROAD.');
                        } else {
                            window.alert('THE CAR CAN BE ON THE ROAD.');
                        }
                        break;
                    case 'miércoles':
                        if ((lastdigit == "5" || lastdigit == "6")) {
                            window.alert('THE CAR CAN NOT BE ON THE ROAD.');

                        } else {
                            window.alert('THE CAR CAN BE ON THE ROAD.');
                        }

                        break;

                    case 'jueves':
                        if ((lastdigit == "7" || lastdigit == "8")) {
                            window.alert('THE CAR CAN NOT BE ON THE ROAD.');

                        } else {
                            window.alert('THE CAR CAN BE ON THE ROAD.');
                        }
                        break;


                    case 'viernes':
                        if ((lastdigit == "9" || lastdigit == "0")) {
                            window.alert('THE CAR CAN NOT BE ON THE ROAD.');

                        } else {
                            window.alert('THE CAR CAN BE ON THE ROAD.');
                        }
                        break;

                    case 'sábado':
                        window.alert('THE CAR CAN BE ON THE ROAD.');
                        break;

                    case 'domingo':
                        window.alert('THE CAR CAN BE ON THE ROAD.');
                        break;

                }
            } else {
                window.alert('IS HOLIDAY THE CAR CAN BE ON THE ROAD.');

            }


        } else {
            window.alert('THE CAR CAN BE ON THE ROAD.');
        }


    }



}


