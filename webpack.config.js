var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin'); // auto-generate index.html from template

const PATHS = {
  //app: './app'
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};

module.exports = {

  // Entry accepts a path or an object of entries.
  // The build chapter contains an example of the latter.
  entry: PATHS.app,

  // All outputs are in build
  output: {
    path: './build',
    filename: 'bundle.js'
  },

  // Add resolve.extensions. '' is needed to allow imports without an extension.
  // Note the .'s before extensions!!! Without those matching will fail.
  resolve: {
    extensions: ['', '.js', '.jsx']
  },


  module: {
      loaders: [
        {

          // Test expects a RegExp! Note the slashes!
          test: /\.css$/,
          loaders: ['style', 'css'],

          // Include accepts either a path or an array of paths. If include isn't set, Webpack will traverse all files within the base directory. This can hurt performance! It is a good idea to set up include always.
          //include: PATHS.app
        },

        // Set up jsx. This accepts js too thanks to RegExp
        {
          test: /\.jsx?$/,
          loader: 'babel',
          include: PATHS.app,
          query: {
            presets: ['es2015', 'react', 'survivejs-kanban']
          }
        }
      ]
    },


  plugins: [

    // Creates index.hmtl in the build folder
    new HtmlwebpackPlugin({

      // Becomes the title tag inside head element
      //title: 'Kanban app'
      template: 'node_modules/html-webpack-template/index.html',
      title: 'Kanban app',

      // Main DOM Element Id to attach the App
      appMountId: 'app'
    }),

    new webpack.HotModuleReplacementPlugin()
  ],

  devtool: 'eval-source-map',

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
