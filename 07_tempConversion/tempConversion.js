const convertToCelsius = function(farenheitTemp) {
  celsiusTemp = 5 / 9 * (farenheitTemp - 32);
  return Math.round(celsiusTemp * 10) / 10;
};

const convertToFahrenheit = function(celsiusTemp) {
  farenheitTemp = ((celsiusTemp * 9) / 5) + 32;
  return Math.round(farenheitTemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
