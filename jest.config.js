/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts'],
  coveragePathIgnorePatterns: ['node_modules', 'test-config', 'interfaces', '.mock.ts'],
  coverageDirectory: '<rootDir>/coverage/',
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  // moduleNameMapper: {
  //   '^@http/(.*)$': '<rootDir>/src/http/$1',
  //   '^@utils/(.*)$': '<rootDir>/src/utils/$1',
  //   '^@exceptions/(.*)$': '<rootDir>/src/exceptions/$1',
  //   '^@api/(.*)$': '<rootDir>/src/modules/api/$1',
  // },
  testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
};
