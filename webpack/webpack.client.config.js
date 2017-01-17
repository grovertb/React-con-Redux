const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './source/client.jsx',
  output: {
    filename: 'app.js',
    path: './built/statics',
    publicPath: process.env.NODE_ENV === 'production' ? 'https://platzi-react-sfs.now.sh' : 'http://localhost:3001',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /(node_modules)/,
        query: {
          presets: ['es2016', 'es2017', 'react'],
          plugins: ['transform-es2015-modules-commonjs'],
          env: {
            production: {
              plugins: ['transform-regenerator', 'transform-runtime'],
              presets: ['es2015']
            },
            development: {
              plugins: ['transform-es2015-modules-commonjs']
            }
          }
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules'),
      },
    ],
  },
  target: 'web',
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.json']
  },
  plugins: [
    new webpack.DefinePlugin({
      'proccess.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development')
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new ExtractTextPlugin('../statics/styles.css'),
  ],
};

if(process.env.NODE_ENV == 'production') {
  // OccurrenceOrderPlugin ordena los modulos deacuerdo al uso

  // DedupePlugin: evita una dependencia duplicada
  // UglifyJsPlugin: minifica el codigo, warnings: para que no muestre en consola los warnings
  // DedupePlugin: evita una dependencia duplicada
  config.plugins.push(
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
      mangle: {
        except: ['$super', '$', 'exports', 'require'],
      },
    })
  );
}

module.exports = config