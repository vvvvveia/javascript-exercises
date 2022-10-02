const reverseString = function(string) {
    let userInput = string.toString();
    let userInputSplit = userInput.split("");
    let userInputReversed = userInputSplit.reverse();
    let userInputJoined = userInputReversed.join("");

    return userInputJoined;
};

// Do not edit below this line
module.exports = reverseString;
