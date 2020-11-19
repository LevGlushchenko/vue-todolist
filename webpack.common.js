const { resolve } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.ts",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: "ts-loader"
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new htmlWebpackPlugin({
      template: resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico",
      title: "Vue.js Todo List"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js"
    },
    extensions: ["*", ".ts", ".js", ".vue", ".json"]
  },
  output: {
    filename: "bundle.js",
    path: resolve(__dirname, "dist")
  }
};
