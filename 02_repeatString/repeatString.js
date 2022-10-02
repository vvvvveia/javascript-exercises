const repeatString = function(userInput, repeatNum) {
    let string = "";

    if (repeatNum < 0) return "ERROR";

    for (let i = 0; i < repeatNum; i++) {
        string += userInput;
    }

    return string;
};

// Do not edit below this line
module.exports = repeatString;
