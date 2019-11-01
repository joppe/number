import { rand } from '@apestaartje/number/rand';

describe('rand', (): void => {
    it('Generate a random float greater or eqaul than 0 and less or equal than 1', () : void => {
        for (let i: number = 0; i < 1000; i += 1) {
            const value: number = rand();

            expect(value).toBeGreaterThanOrEqual(0);
            expect(value).toBeLessThanOrEqual(1);
        }
    });
});
