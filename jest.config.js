module.exports = {
  testMatch: ["**/src/**/*.test.ts"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testEnvironment: "jsdom",
};
