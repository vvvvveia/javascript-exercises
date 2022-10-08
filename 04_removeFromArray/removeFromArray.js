const removeFromArray = function (array, ...input) {
    const newArray = [];

    array.forEach((item) => {
        if (!input.includes(item)) {
            newArray.push(item);
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
