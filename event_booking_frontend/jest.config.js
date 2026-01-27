module.exports = {
  roots: ["<rootDir>/src"],
  testMatch: ["**/__tests__/**/*.js", "**/*.test.js"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  }
};
