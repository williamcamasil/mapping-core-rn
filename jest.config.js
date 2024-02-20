const jestConfig = require('mapping-tools-rn/lib/jest/jest.config');

module.exports = {
  ...jestConfig,
  collectCoverageFrom: [
    ...jestConfig.collectCoverageFrom,
    '!src/legacy/**/*.{js,ts,tsx}',
  ],
};
