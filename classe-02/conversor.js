//Fahrenheit x Celsius

var tempFahrenheit = parseInt(prompt("Qual a temperatura em Fahrenheit?"));

//converter para Cº

var converToCelsius = (tempFahrenheit - 32) * (5/9);

alert("A temperatura em Celsius é: " + converToCelsius);