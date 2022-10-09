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

const sum = function() {

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
