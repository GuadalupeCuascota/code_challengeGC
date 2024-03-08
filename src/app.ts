import Predictor from "./Models/predictor"

const predictor = new Predictor("BCD-9102", "03/05/2024", "09:30")


let day = predictor.getDay(new Date(predictor.date));
let lastdigit = predictor.getlastDigit(predictor.plate_number)



switch (day) {
    case 'lunes':
        if ((lastdigit == "1" || lastdigit == "2")) {
            console.log("NO CIRCULA")
        } else {
            console.log("SI CIRCULA")
        }
        break;
    case 'martes':
        if (lastdigit == "3" || lastdigit == "4") {
            console.log("NO CIRCULA")

        } else {
            console.log("SI CIRCULA")

        }
        break;
    case 'miercoles':
        if (lastdigit == "5" || lastdigit == "6") {
            console.log("NO CIRCULA")

        } else {
            console.log("SI CIRCULA")

        }

            break;

    case 'jueves':
        if (lastdigit == "7" || lastdigit == "8") {
            console.log("NO CIRCULA")

        } else {
            console.log("SI CIRCULA")

        }
        break;


    case 'viernes':
        if (lastdigit == "9" || lastdigit == "0") {
            console.log("NO CIRCULA")

        } else {
            console.log("SI CIRCULA")

        }
        break;
     
}







