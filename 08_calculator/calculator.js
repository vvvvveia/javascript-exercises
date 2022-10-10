const add = function (...numsToAdd) {
    let result = 0;

    for (let num of numsToAdd) result += num;

    return result;
};

const subtract = function (startNum, ...numsToSubtract) {
    let result = startNum;

    for (let num of numsToSubtract) result -= num;

    return result;
};

const sum = function (numsToSum) {
    let result = 0;

    for (let num of numsToSum) result = result + Number(num);

    return result;
};

const multiply = function (numsToMultiply) {
    return numsToMultiply.reduce(
        (previousValue, currentValue) => previousValue * currentValue
    );
};

const power = function () {

};

const factorial = function () {};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial,
};
