const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: "ts-loader",
        options: {
          configFile: path.resolve(__dirname, "tsconfig.json"),
        },
      },
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".js"],
  },
};
