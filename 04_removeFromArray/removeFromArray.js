const removeFromArray = function (array, input, ...moreInput) {
    if (typeof input === "number" && input - 1 <= array.length) {
        array.splice(input - 1, 1);
    } else if (typeof input === "string" && array.includes(input)) {
        array.splice(array.indexOf(input), 1);
    }

    if (moreInput.length >= 0) {
        for (let inputData of moreInput) {
            if (
                typeof inputData === "number" &&
                inputData <= array.length
            ) {
                array.splice(inputData - 1, 1);
            } else if (
                typeof inputData === "string" &&
                array.includes(inputData)
            ) {
                array.splice(array.indexOf(inputData), 1);
            }
        }
    }

    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
