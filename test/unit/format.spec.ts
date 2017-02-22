import {numberFormat} from '../../src/format';

describe('numberFormat', ():void => {
    it('format any number', ():void => {
        expect(numberFormat(2.12324, 2, '@', '#')).toBe('2@12');
        expect(numberFormat(1222.12324, 2, '@', '#')).toBe('1#222@12');
        expect(numberFormat(12343452, 2, '.', '')).toBe('12343452.00');
        expect(numberFormat(1234345.2, 2, '.', ',')).toBe('1,234,345.20');
        expect(numberFormat(1234345.2, 0, '.', ',')).toBe('1,234,345');
        expect(numberFormat(1345.2, 0, '.', ',')).toBe('1,345');
        expect(numberFormat(1345.2, 0, ',', '.')).toBe('1.345');
        expect(numberFormat(1446.552236, 0, ',', '.')).toBe('1.447');
        expect(numberFormat(747.63, 0, ',', '.')).toBe('748');
    });
});