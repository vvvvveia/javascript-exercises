const add = function(...numsToAdd) {
    let result = 0;

    for (let num of numsToAdd) {
        result += num;
    }

    return result;
};

const subtract = function(startNum, ...numsToSub) {
    let result = startNum;

    for (let num of numsToSub) {
        result -= num;
    }

    return result;
};

const sum = function(numsToSum) {
    let result = [0];

    for (let num of numsToSum) {
        result = Number(result) + Number(num);
    }

    return Number(result);
};

const multiply = function() {

};

const power = function() {

};

const factorial = function() {

};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
