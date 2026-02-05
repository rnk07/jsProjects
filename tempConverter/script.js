const celsiusInput = document.querySelector(".celsius")
const faherenheitInput = document.querySelector(".faherenheit")
const kelvinInput = document.querySelector(".kelvin")




function calculateTemp(event) {
    console.log(typeof(event.target.value))
    let enteredTemp = +event.target.value  //+ is converting string to number
    console.log(enteredTemp)
    console.log(event.target.name)
    if (event.target.name === "celsius") {

        faherenheitInput.value = ((enteredTemp * 1.8) + 32).toFixed(2);
        kelvinInput.value = (enteredTemp + 273.15).toFixed(2);
    } else if (event.target.name === "faherenheit") {

        celsiusInput.value = ((enteredTemp - 32) / 1.8).toFixed(2);
        kelvinInput.value = ((enteredTemp + 459.67) * 1.8).toFixed(2);
    } else {
        celsiusInput.value = (enteredTemp - 273.15).toFixed(2);
        faherenheitInput.value = ((enteredTemp * 1.8) - 459.67).toFixed(2);

    }



}

