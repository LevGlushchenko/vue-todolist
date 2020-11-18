const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // The application entry point
  entry: {
    main: "./src/main.js"
  },
  // By default the output directory is `dist`
  output: {
    path: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      // use babel-loader to transpile js files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      // use babel-loader to transpile vue files
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
        loader: "file-loader",
        options: {
          name: "[name][contenthash:8].[ext]"
        }
      },
      {
        test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
        loader: "file-loader",
        options: {
          outputPath: "assets",
          esModule: false
        }
      },
      {
        test: /\.s?css$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            options: {
              plugins: () => [autoprefixer()]
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin(),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/favicon.ico"
    }),
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      vue$: "vue/dist/vue.runtime.esm.js"
    },
    extensions: ["*", ".js", ".vue", ".json"]
  },
  devServer: {
    contentBase: path.join(__dirname, "../public"),
    port: 3000,
    publicPath: "/dist/"
  }
};
