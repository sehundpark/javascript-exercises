const sumAll = function(firstValue, secondValue) {
    sum = 0;
    if (typeof firstValue !== "number" || typeof secondValue !== "number") {
        return "ERROR";
    }
    if (firstValue === 0 || secondValue === 0) {
        return "ERROR";
    } else if (firstValue < 0 || secondValue < 0) {
        return "ERROR";
    }
    else if (firstValue > secondValue) {
        [secondValue, firstValue] = [firstValue, secondValue];
        while (firstValue < (secondValue + 1)) {
        sum = sum + firstValue;
        firstValue++;
        }
        return sum;
    } else {
        while (firstValue < (secondValue + 1)) {
        sum = sum + firstValue;
        firstValue++;
        }
        return sum;
    }
};

function addNumBetween(firstValue, secondValue) {
    while (firstValue < (secondValue + 1)) {
        sum = sum + firstValue;
        firstValue++;
    }
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
