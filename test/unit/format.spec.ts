import { format } from '../../src/format';

describe('form', (): void => {
    it('format any number', (): void => {
        expect(format(2.12324, 2, '@', '#')).toBe('2@12');
        expect(format(1222.12324, 2, '@', '#')).toBe('1#222@12');
        expect(format(12343452, 2, '.', '')).toBe('12343452.00');
        expect(format(1234345.2, 2, '.', ',')).toBe('1,234,345.20');
        expect(format(1234345.2, 0, '.', ',')).toBe('1,234,345');
        expect(format(1345.2, 0, '.', ',')).toBe('1,345');
        expect(format(1345.2, 0, ',', '.')).toBe('1.345');
        expect(format(1446.552236, 0, ',', '.')).toBe('1.447');
        expect(format(747.63, 0, ',', '.')).toBe('748');
    });
});
