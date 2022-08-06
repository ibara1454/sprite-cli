module.exports = {
  settings: {
    // Setup aliases for commonly used imports
    // https://github.com/import-js/eslint-plugin-import/issues/1573#issuecomment-566373069
    'import/resolver': {
      alias: {
        map: [['@', './src']],
        extensions: ['.mjs', '.js', '.json', '.ts', '.d.ts'],
      },
    },
  },

  extends: [
    'airbnb-base',
    // Turns off all rules that are unnecessary or might conflict with Prettier.
    'prettier',
  ],
  rules: {},
  // By default, without `overrides` section, ESLint will not be applied on
  // non-JavaScript file (*.js).
  overrides: [
    {
      files: ['*.ts'],
      // Use tsdoc plugin to check the documentation format.
      plugins: ['tsdoc'],
      extends: [
        'airbnb-base',
        'airbnb-typescript/base',
        // Turns off all rules that are unnecessary or might conflict with Prettier.
        'prettier',
      ],
      parserOptions: {
        project: './tsconfig.json',
      },
      rules: {
        'tsdoc/syntax': 'warn',
      },
    },
  ],
};
