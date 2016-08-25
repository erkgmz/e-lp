const path = require('path');

module.exports = {
  context: path.resolve('js'),
  entry: ['./index'],
  output: {
    path: path.resolve('build/js/'),
    publicPath: 'public/assets/js/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'public'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /.node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /.node_modules/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.jpg$/,
        exclude: /.node_modules/,
        loader: 'url-loader?limit=1000'
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        exclude: /.node_modules/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
