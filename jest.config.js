module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts', 'vue'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '.*\\.(vue)$': 'vue-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: ['./src/tests/setup.ts'],
  testRegex: '(/tests/^/(?!setup).*|(\\.|/)(test|spec))\\.(ts?)$',
  testURL: 'http://localhost/',
  // collectCoverage: true,
  // collectCoverageFrom: ['**/src/*.{ts,vue}', '**/src/components/*.{ts,vue}', '!**/node_modules/**'],
};
