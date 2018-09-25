var path = require('path')
var merge = require('webpack-merge')
var webpack = require('webpack')
var config = require('../config')
var utils = require('./utils')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var isDev = process.env.NODE_ENV === 'development'

module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: isDev
      ? config.dev.assetsPublicPath
      : config.build.assetsPublicPath
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json'],
    alias: {
      '@': resolve('src'),
    }
  },
  devtool:'source-map',
  module: {
    rules: [
      {
        test: /\.js/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader',
          options: {
            minimize: true
          }
        }
      },
      {
        test: /\.(pug|html)$/,
        loader: 'pug-loader',
        options: {
          root: resolve('src/views'),
          pretty: true
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          fallback: 'file-loader',
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          publicPath: "/static/img/"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]'),
          publicPath: "/node_modules/"
        }
      }
    ]
  },
  plugins: [
    ...utils.pageFile(isDev),
    // extract css into its own file
    new ExtractTextPlugin({
      filename: utils.assetsPath('css/[name].[contenthash].css')
    }),
    // Compress extracted CSS. We are using this plugin so that possible
    // duplicated CSS from different components can be deduped.
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
      // In case you imported plugins individually, you must also require them here:
      Util: 'exports-loader?Util!bootstrap/js/dist/util',
      Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown'
    })
    // new HtmlWebpackPlugin({
    //   template: require('html-webpack-template-pug'),
    //   inject: false,
    //   injectExtras: {
    //     head: [
    //       {
    //         tag: 'base',
    //         href: isDev ? config.dev.publicPath : config.build.publicPath
    //       }
    //     ]
    //   }
    // })
  ]
}
