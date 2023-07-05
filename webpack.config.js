const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    reader: "./src/reader.js",
    process: "./src/process.js",
  },
  output: {
    publicPath: "",
  },
  optimization: {
    minimize: false,
  },
  resolve: {
    modules: [
      path.resolve(__dirname, 'node_modules'),
      path.resolve(__dirname, './'),
    ]
  }

};
