const removeFromArray = function (array, num) {
    const userArray = array;
    let userNum = num - 1;
    userArray.splice(userNum, 1);
    return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;
