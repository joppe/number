"use strict";
const string = require("string/reverse");
const THREE_DIGITS = /(\d{3})/g;
exports.numberFormat = (input, decimalCount = 2, decimalPoint = '.', thousandsSeperator = ',') => {
    const str = input.toFixed(decimalCount);
    const [integer, fraction] = str.split('.');
    let output = '';
    if (integer.length > 3) {
        const reversedInteger = string.reverse(integer);
        const reversedSeparatedInteger = reversedInteger.replace(THREE_DIGITS, (match) => {
            return `${match}${thousandsSeperator}`;
        });
        output += string.reverse(reversedSeparatedInteger);
    }
    else {
        output += integer;
    }
    if (0 < decimalCount) {
        output += `${decimalPoint}${fraction}`;
    }
    return output;
};
//# sourceMappingURL=format.js.map