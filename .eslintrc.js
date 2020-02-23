module.exports = {
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  rules: {
    'comma-dangle': ['error', 'never'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  }
};
