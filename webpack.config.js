const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  mode: process.env.NODE_ENV || 'development',
  context: path.resolve(__dirname, 'src'),
  entry: './index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    modules: ['node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};

if (config.mode === 'development') {
  config.devtool = 'source-map';
}

module.exports = config;
