import * as string from 'string/reverse';

const THREE_DIGITS:RegExp = /(\d{3})/g;

/**
 * @interface FormatFunctionInterface
 */
export interface FormatFunctionInterface {
    /**
     * @param {string} input
     * @param {number} decimalCount
     * @param {string} decimalPoint
     * @param {string} thousandsSeperator
     * @returns {string}
     */
    (input:number, decimalCount?:number, decimalPoint?:string, thousandsSeperator?:string):string;
}

/**
 * Format a number with decimal separator and thousands grouping separator
 *
 * @param {string} input
 * @param {number} [decimalCount=2]
 * @param {string} [decimalPoint='.']
 * @param {string} [thousandsSeperator=',']
 * @returns {string}
 */
export const format:FormatFunctionInterface = (input:number, decimalCount:number = 2, decimalPoint:string = '.', thousandsSeperator:string = ','):string => {
    // Cast the number to a string with the desired decimals
    const str:string = input.toFixed(decimalCount);

    // Split the number in a integer and a fraction part
    const [integer, fraction]:string[] = str.split('.');
    let output:string = '';

    // If there are more then 3 integers the thousands separator is relevant
    if (integer.length > 3) {
        // Reverse the order of the integers, then we can place a thousandsSeperator after every 3 characters
        const reversedInteger:string = string.reverse(integer);
        const reversedSeparatedInteger:string = reversedInteger.replace(THREE_DIGITS, (match:string):string => {
            return `${match}${thousandsSeperator}`;
        });

        // Reverse the integers back again
        output += string.reverse(reversedSeparatedInteger);
    } else {
        output += integer;
    }

    // Show a decimal char if needed
    if (0 < decimalCount) {
        output += `${decimalPoint}${fraction}`;
    }

    return output;
};
