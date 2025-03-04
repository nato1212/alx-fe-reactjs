module.exports = {
  transform: {
    "^.+\\.jsx?$": "babel-jest", // Transform JSX files using babel-jest
  },
  testEnvironment: "jsdom", // Set the test environment to jsdom (browser-like environment)
};
