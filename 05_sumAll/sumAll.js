const sumAll = function (num1, num2) {
    let total = 0;

    if (
        num1 > num2 &&
        num1 >= 0 &&
        num2 >= 0 &&
        typeof num1 === "number" &&
        typeof num2 === "number"
    ) {
        for (let i = num2; i < num1; i++) {
            total += 1;
        }
    } else if (
        num2 > num1 &&
        num1 >= 0 &&
        num2 >= 0 &&
        typeof num1 === "number" &&
        typeof num2 === "number"
    ) {
        for (let i = num1; i < num2; i++) {
            total += 1;
        }
    } else {
        return "ERROR";
    }

    return total;
};

/*
if num1 > num2 && num1 and num2 > 0:
    while num1 > num2, increment num1:
        add each number to numsToAdd array then += total;
        return total;
else if num2 > num1 && num1 and num2 > 0:
    while num2 > num1, increment num1:
        add each number to numsToAdd array then += total;
        return total;
else
    return "ERROR";
 */

// Do not edit below this line
module.exports = sumAll;
