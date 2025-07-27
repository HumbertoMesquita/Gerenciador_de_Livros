const path = require('path');

module.exports = {
  entry: './frontend/src/app.js', // Arquivo de entrada
  output: {
    filename: 'bundle.js', // Arquivo de saída
    path: path.resolve(__dirname, 'frontend/public/dist'), // Pasta de saída
    publicPath: '/dist/'
  }
};