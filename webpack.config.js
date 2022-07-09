const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (env = {}) => {
  const isProd = env.prod;
  return {
    mode: isProd ? "production" : "development",
    entry: path.resolve(__dirname, "./src/main.js"),
    output: {
      filename: "[name].js",
      path: __dirname + "/dist",
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "zvm-loader",
          options: {
            reactivityTransform: true,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "./index.html"),
        filename: `index.html`,
      }),
    ],
  };
};
