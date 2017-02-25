const path = require('path');

module.exports = {
  context: path.resolve('js'),

  entry: ['./index'],

  output: {
    path: path.resolve('docs'),
    filename: 'bundle.js'
  },

  devServer: {
    contentBase: 'docs'
  },

  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "jshint-loader"
      }
    ],

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

  jshint: {
    camelcase: true,

    emitErrors: false,

    failOnHint: false,

    esversion: 6

    // custom reporter function
    // reporter: function(errors) { }
  },

  resolve: {
    extensions: ['', '.js', '.es6']
  }
};
