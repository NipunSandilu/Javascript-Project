module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ['regenerator-runtime/runtime', '@testing-library/jest-dom'],
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['<rootDir>/src/**/*.test.js'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js', 'mjs', 'cjs'],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
