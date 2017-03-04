export interface FormatFunctionInterface {
    (input: number, decimalCount?: number, decimalPoint?: string, thousandsSeperator?: string): string;
}
export declare const format: FormatFunctionInterface;
