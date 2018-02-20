const path = require('path');

module.exports = {
  entry: [
    'babel-polyfill',
    './src/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders:['babel-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          }, 
          {
            loader: "css-loader" // translates CSS into CommonJS
          }, 
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './dist',
    port: 3000,
    open: true
  }
};