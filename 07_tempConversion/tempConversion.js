const ftoc = function (f) {
    let newF = ((f - 32) * 5) / 9;
    return Math.round(newF * 10) / 10;
};

const ctof = function (c) {
    let newC = c * 1.8 + 32;
    return Math.round(newC * 10) / 10;
};

// Do not edit below this line
module.exports = {
    ftoc,
    ctof,
};
