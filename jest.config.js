module.exports = {
  collectCoverage: true,
  coverageDirectory: "coverage",
  setupFiles: ["<rootDir>/jest.setup.js"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
};
