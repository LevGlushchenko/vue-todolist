const { merge } = require('webpack-merge');
const { resolve } = require('path');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    watchContentBase: true,
    compress: true,
    port: 3000,
    open: true,
    hot: true,
  },
});
