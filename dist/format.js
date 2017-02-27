"use strict";
var string = require("node_modules/string/dist/reverse");
var THREE_DIGITS = /(\d{3})/g;
exports.numberFormat = function (input, decimalCount, decimalPoint, thousandsSeperator) {
    if (decimalCount === void 0) { decimalCount = 2; }
    if (decimalPoint === void 0) { decimalPoint = '.'; }
    if (thousandsSeperator === void 0) { thousandsSeperator = ','; }
    var str = input.toFixed(decimalCount);
    var _a = str.split('.'), integer = _a[0], fraction = _a[1];
    var output = '';
    if (integer.length > 3) {
        var reversedInteger = string.reverse(integer);
        var reversedSeparatedInteger = reversedInteger.replace(THREE_DIGITS, function (match) {
            return "" + match + thousandsSeperator;
        });
        output += string.reverse(reversedSeparatedInteger);
    }
    else {
        output += integer;
    }
    if (0 < decimalCount) {
        output += "" + decimalPoint + fraction;
    }
    return output;
};
//# sourceMappingURL=format.js.map