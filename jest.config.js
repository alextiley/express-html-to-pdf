module.exports = {
  clearMocks: true,
  resetModules: true,
  restoreMocks: true,
  roots: [
    '<rootDir>/src'
  ],
  transform: {
    '^.+\\.ts?$': 'ts-jest'
  }
};
