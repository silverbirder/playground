const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProduction = process.env.NODE_ENV === "production";

const config = {
  externalsType: "module",
  experiments: {
    outputModule: true,
  },
  externals: {
    react: "react",
    "react-dom/client": "react-dom/client",
  },
  entry: "./src/index",
  output: {
    path: path.resolve(__dirname, "dist"),
    environment: { module: true },
  },
  devServer: {
    open: true,
    host: "localhost",
    port: 4001,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        loader: "ts-loader",
        exclude: ["/node_modules/"],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: "asset",
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = "production";
  } else {
    config.mode = "development";
  }
  return config;
};
