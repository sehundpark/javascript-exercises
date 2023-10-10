const removeFromArray = function(array, ...args) {
    const finalArray = [];
    return array.filter(item => !args.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
