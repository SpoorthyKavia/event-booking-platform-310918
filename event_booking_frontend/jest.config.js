module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  // testMatch does NOT include src/testUtils.js; only **/*.test.js are included
  testPathIgnorePatterns: ["/node_modules/", "/src/testUtils.js$"], // exclude utility helper
  // Optional: adjust testMatch if needed for your structure; by default, __tests__ is included.
};
