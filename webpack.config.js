//var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

// const PATHS = {
//   app: path.join(__dirname, 'app'),
//   build: path.join(__dirname, 'build')
// };

module.exports = {

  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: './app',

  // All outputs are in build
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  plugins: [

    // Creates index.hmtl in the build folder
    new HtmlwebpackPlugin({

      // Becomes the title tag inside head element
      title: 'Kanban app'
    }),

    new webpack.HotModuleReplacementPlugin()
  ],

  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,

    // Display only errors to reduce the amount of output.
    stats: 'errors-only',

    // Parse host and port from env so this is easy to customize.
    host: process.env.HOST,
    port: process.env.PORT
  }

};
