const reverseString = function(string) {
    const stringArray = string.split('');
    const reversedStringArray = stringArray.reverse();
    const reversedString = reversedStringArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
