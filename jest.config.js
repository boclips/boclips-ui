module.exports = {
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>setupTests.ts"],
  globals: {
    "ts-jest": {
      tsConfig: "tsconfig.jest.json",
      diagnostics: false,
      babelConfig: true,
    },
  },
  moduleFileExtensions: ["ts", "tsx", "js", "less"],

  testEnvironment: "jest-environment-jsdom-sixteen",

  testMatch: ["<rootDir>/lib/**/*.(integrationTest|test).(ts|tsx)"],
  testPathIgnorePatterns: ["node_modules"],
  preset: "ts-jest",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
    "^.+\\.svg$": "<rootDir>/__mocks__/svgTransform.js",
  },
};
