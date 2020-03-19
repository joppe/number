module.exports = {
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: {
                module: 'commonjs',
                paths: {
                    '@apestaartje/number/*': ['src/*']
                }
            }
        }
    },
    moduleNameMapper: {
        '^@apestaartje/number/(.*)$': '<rootDir>/src/$1'
    },
    preset: 'ts-jest',
    setupFilesAfterEnv: ['./jest.setup.js']
};
