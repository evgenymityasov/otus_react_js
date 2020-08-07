
const path = require("path");
const babelLoader = require.resolve("babel-loader");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index_bundle.js"
  },
  module:{
        rules:[
            {
                test: /\.(js|ts)x?$/,
                loader: babelLoader,
                exclude: /node_modules/,
             }
        ]
  }
}; 