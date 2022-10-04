const removeFromArray = function (array, num, ...moreArgs) {
    array.splice(num - 1, 1);
    return array;
};

/*
if typeof `num` == number &&  num - 1 > `array.length`:
    continue;
if typeof `num` == string && `array` does not include `num`:
    continue;
while looping through values in `moreArgs`:
    if typeof `moreArgs[?]` == number &&  `moreArgs[?]` - 1 > `array.length`:
        continue;
    if typeof `moreArgs[?]` == string && `array` does not include `moreArgs[?]`:
        continue;
*/

// Do not edit below this line
module.exports = removeFromArray;