const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  mode: "development",
  resolve: {
    // Add `.ts` as a resolvable extension.
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // this will apply to both plain `.js` files
      // AND `<script>` blocks in `.vue` files
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: file => /node_modules/.test(file) && !/\.vue\.js/.test(file)
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] }
      }
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      // this will apply to both plain `.scss` files
      // AND `<style lang="scss">` blocks in `.vue` files
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
