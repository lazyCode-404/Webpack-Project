// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

//  module.exports = {
//    entry: {
//     mode: 'development',
//      index: './src/index.js',
//      print: './src/print.js',
//    },
//    stats: {
//     children: true,
//   },
//    devtool: 'inline-source-map',
//    devServer: {
//      static: './dist',
//    },
//    plugins: [
//     new HtmlWebpackPlugin({
//    title: 'Output Management',
//     template: './src/index.html',
//     }),
//   ],
//    output: {
//      filename: '[name].bundle.js',
//      path: path.resolve(__dirname, 'dist'),
//      clean: true,
//      publicPath: '/',
//    },
//    optimization: {
//     runtimeChunk: 'single',
//   },
//    module: {
//     rules: [
//       {
//         test: /\.css$/i,
//         use: ['style-loader', 'css-loader'],
//       },
//     ],
//   },
//  };

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mix.webpackConfig({
    stats: {
        children: true,
    },
});
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],
  },
};