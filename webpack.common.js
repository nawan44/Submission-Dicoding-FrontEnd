const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
   entry: "./src/app.js",
   output: {
    path: 'build/',
    file: 'bundle.js',
    publicPath: '/image'
},
devServer: {
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/image/'
},
   module: {
       rules: [
           {
               test: /\.css$/,
               use: [
                   {
                       loader: "style-loader"
                   },
                   {
                       loader: "css-loader"
                   }
               ]
           },
           {
             test: /\.jpg/,
             loader: "file"
           },
           { 
            test: /\.(png|jpg)$/, 
            loader: 'file-loader?name=/image/[name].[ext]' 
       }
               ]
   },
   plugins: [
       new HtmlWebpackPlugin({
           template: "./src/index.html",
           filename: "index.html"
       })
   ]
}