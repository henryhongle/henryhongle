const path = require('path');

module.exports = {
  plugins: {
    'postcss-import': {
      path: [path.join(__dirname, '/src/styles')]
    },
    'postcss-preset-env': {
      browsers: 'last 2 versions'
    },
    autoprefixer: {},
    cssnano: {}
  }
};
