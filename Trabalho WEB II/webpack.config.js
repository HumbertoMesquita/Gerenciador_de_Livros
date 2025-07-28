const path = require('path');

module.exports = {
  entry: './frontend/src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend/public/dist'),
  }
};