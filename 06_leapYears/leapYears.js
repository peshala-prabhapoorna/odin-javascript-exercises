const leapYears = function(year) {
    const isCenturyLeapYear = year % 100 === 0 && year % 400 === 0;
    const isNonCenturyLeapYear = year % 4 === 0 && year % 100 != 0;
    if (isCenturyLeapYear || isNonCenturyLeapYear) return true;
    return false;
};

// Do not edit below this line
module.exports = leapYears;
