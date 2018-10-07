const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
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
