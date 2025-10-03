const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dev_build'),
      watch: true
    },
    hot: true,
    open: true,
    historyApiFallback: true,
    host: '0.0.0.0', // слушать все интерфейсы
    port: 8080 // твой текущий порт
    // open: 'http://172.27.114.185:8080' // браузер откроется на этом IP
  },
  output: {
    path: path.resolve('.', 'dev_build'),
    filename: 'index.js',
    clean: true
  }
})
