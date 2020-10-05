module.exports = {
  parser: "@babel/eslint-parser",
  env: {
    node: true,
    "jest/globals": true,
  },
  parserOptions: {
    sourceType: "module",
    babelOptions: {
      configFile: "./babel.config.js",
    },
  },
  plugins: ["jest"],
  extends: [
    "eslint:recommended",
    "prettier",
    "prettier/babel",
    "plugin:jest/recommended",
    "plugin:jest/style"
  ],
  rules: {
    eqeqeq: "error"
  }
};
