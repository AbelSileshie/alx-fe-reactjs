export default {
  transform: {
    "^.+\\.[tj]sx?$": "babel-jest", // Use Babel to transform test files
  },
  testEnvironment: "jest-environment-jsdom", // Simulate browser environment for React tests
};
