const { resolve } = require('path')
const { name } = require('./package.json')
const root = resolve(__dirname)
module.exports = {
  rootDir: root,
  displayName: name,
  name,
  // testMatch: ['<rootDir>/src/__tests__/**/*.spec.ts'],
  clearMocks: true,
  collectCoverage: true,
  preset: 'ts-jest',
  // setupFiles: [
  //   '<rootDir>/src/__tests__/setupTests.ts'
  // ],
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    '~/(.*)': '<rootDir>/src/$1',
    '@core/(.*)': '<rootDir>/src/core/$1'
  }
}
