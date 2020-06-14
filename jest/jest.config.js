module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
    'types/(.+)': '<rootDir>/src/types/$1',
    '^utils$': '<rootDir>/src/utils',
    '^mathUtils$': '<rootDir>/src/mathUtils',
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
