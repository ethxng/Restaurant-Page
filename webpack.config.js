const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  // devtool allows error to be announced instead of staying hidden
  devtool: 'inline-source-map',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
          // this loader allows css file to be imported
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // this loader allows images to carry overs
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};