const sumAll = function (min, max) {
    let total = 0;

    if (
        typeof min !== "number" ||
        typeof max !== "number" ||
        min < 0 ||
        max < 0
    ) {
        return "ERROR";
    }
    if (min > max) {
        const temp = min;
        min = max;
        max = temp;
    }
    for (let i = min; i < max + 1; i++) {
        total += i;
    }

    return total;
};

module.exports = sumAll;

// Do not edit below this line
module.exports = sumAll;
