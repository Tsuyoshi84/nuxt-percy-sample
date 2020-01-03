module.exports = {
  moduleFileExtensions: ["js", "json"],
  transform: {},
  testRegex: "(/__tests__/.*|(\\.|/)(e2e))\\.js$",
  testPathIgnorePatterns: ["/node_modules/"],
  setupFiles: [],
  preset: "jest-puppeteer"
};
