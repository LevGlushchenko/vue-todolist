const { resolve } = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  target: 'web',
  entry: './src/main.ts',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.tsx?$/,
        exclude: [/node_modules/],
        use: {
          loader: 'ts-loader',
          options: {
            appendTsSuffixTo: [/\.vue$/],
          },
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        enforce: 'pre',
        test: /\.(js|ts|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
      title: 'Vue.js Todo List',
    }),
    new CleanWebpackPlugin(),
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js',
      '@': resolve(__dirname, 'src'),
    },
    extensions: ['.ts', '.js', '.vue', '.json'],
  },
};
