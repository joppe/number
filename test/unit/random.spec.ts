import { random } from '../../src/random';

describe('random', (): void => {
    it('Generates a random integer value greater or equal than min and less or equal than max', (): void => {
        for (let i: number = 0; i < 1000; i += 1) {
            const value: number = random(18, 45);

            expect(Number.isInteger(value)).toBe(true);
            expect(value).toBeGreaterThanOrEqual(18);
            expect(value).toBeLessThanOrEqual(45);
        }
    });
});