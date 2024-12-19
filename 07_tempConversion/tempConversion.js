const convertToCelsius = function(tempF) {
    const tempC = (tempF - 32) / 180 * 100;
    return Math.round(tempC * 10) / 10;
};

const convertToFahrenheit = function(tempC) {
    const tempF = (tempC / 100 * 180) + 32;
    return Math.round(tempF * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
