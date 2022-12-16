// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:storybook/recommended"],
  overrides: [
    {
      // or whatever matches stories specified in .storybook/main.js
      "files": ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      "rules": {
        // example of overriding a rule
        //"storybook/hierarchy-separator": "error",
        // example of disabling a rule
        //"storybook/default-exports": "off",
      }
    }
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    indent: ["error", 2],
    "linebreak-style": ["error", "windows"],
    quotes: ["error", "double"],
    semi: ["error", "always"]
  }
};