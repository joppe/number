export interface NumberFormatFunctionInterface {
    (input: number, decimalCount?: number, decimalPoint?: string, thousandsSeperator?: string): string;
}
export declare const numberFormat: NumberFormatFunctionInterface;
