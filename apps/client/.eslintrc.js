module.exports = {
  root: true,
  env: {
    node: true,
    commonjs: true,
  },
  extends: [
    'turbo',
    'plugin:storybook/recommended',
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    babelOptions: {
      presets: ['next/babel'],
    },
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
    ecmaVersion: 2015,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'import/order': ['error', { 'newlines-between': 'always' }],
    'arrow-body-style': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': [
      'error',
      {
        functions: 'defaultArguments',
      },
    ],
  },
};
