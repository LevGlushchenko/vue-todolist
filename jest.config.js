module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testRegex: '(/tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  testURL: 'http://localhost/',
  collectCoverage: true,
  collectCoverageFrom: ['**/src/*.{ts,js,vue}', '!**/node_modules/**'],
};
