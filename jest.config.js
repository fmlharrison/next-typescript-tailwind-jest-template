module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@interfaces(.*)$": "<rootDir>/interfaces$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@utils(.*)$": "<rootDir>/utils$1",
  },
};
