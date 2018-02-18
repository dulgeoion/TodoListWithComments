const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: './src/App.js',
  output: {
    path: __dirname,
    filename: "main.js"
  },
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["es2015", "react"]
          }
        }
      },
      {
        test: /\.css$/,
        use:  ['style-loader', 'css-loader']
      }
    ]
  }
}
