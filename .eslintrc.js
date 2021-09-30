module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    'react/react-in-jsx-scope': 'off',
  },
  overrides: [
    {
      files: ['**/*.test.js', 'jest.setup.js'],
      env: {
        jest: true,
      },
      plugins: ['jest'],
    },
  ],
};
