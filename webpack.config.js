const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: {
    main: './assets/main.js',
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: MiniCssExtractPlugin.loader,
      }, {
        loader: 'css-loader',
      }, {
        loader: 'sass-loader',
      }],
    }, {
      test: /\.(svg)$/i,
      use: [{
        loader: 'file-loader',
      }],
    }],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new ManifestPlugin(),
  ],
};
