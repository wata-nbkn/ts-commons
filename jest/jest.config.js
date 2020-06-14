module.exports = {
  rootDir: '../',
  moduleFileExtensions: ['js', 'ts'],
  moduleNameMapper: {
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
