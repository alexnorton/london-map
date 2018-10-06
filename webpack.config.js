const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new CleanWebpackPlugin('build'),
    new CopyWebpackPlugin([
      {
        from: 'public/',
      },
    ]),
  ],
  devServer: {
    contentBase: './public',
  },
};
