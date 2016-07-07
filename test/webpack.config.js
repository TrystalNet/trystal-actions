const webpack = require('webpack')

module.exports = {
  entry: './spec.js',
  output: { filename: './bundle.js' },
  resolve: { extensions: ['', '.webpack.js', '.web.js', '.jsx', '.js'] },
  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel', query:{presets: ['es2015']} }
    ]
  }
}