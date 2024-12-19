const sumAll = function(num1, num2) {
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';
    if (num1 < 0 || num2 < 0) return 'ERROR';

    const sum1 = num1 * (num1 + 1) / 2;
    const sum2 = num2 * (num2 + 1) / 2;

    if (sum1 < sum2) return sum2 - sum1 + num1;
    return sum1 - sum2 + num2;
};

// Do not edit below this line
module.exports = sumAll;
