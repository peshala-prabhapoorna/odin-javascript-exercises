const removeFromArray = function(array, ...args) {
    for (const arg of args) {
        while (true) {
            const index = array.indexOf(arg);
            if (index < 0) break;
            
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
