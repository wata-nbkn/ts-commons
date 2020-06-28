module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    '^types$': '<rootDir>/src/types',
    '^consts$': '<rootDir>/src/consts',
    '^utils$': '<rootDir>/src/utils',
    '^utils/(.+)': '<rootDir>/src/utils/$1',
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
