module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^types$': '<rootDir>/src/types',
    '^consts$': '<rootDir>/src/consts',
    '^utils$': '<rootDir>/src/utils',
    '^mathUtils$': '<rootDir>/src/mathUtils',
    '^dateUtils$': '<rootDir>/src/dateUtils',
    '^fileUtils$': '<rootDir>/src/fileUtils',
  },
  preset: 'ts-jest',
  testRegex: '/__tests__/.*\\.spec\\.ts$',
  setupFilesAfterEnv: ['<rootDir>/jest/jest.setup.js'],
  globals: {
    'ts-jest': {
      compiler: 'ttypescript',
      diagnostics: true,
    },
  },
};
