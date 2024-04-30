/* eslint-disable spellcheck/spell-checker */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, 'public'),
    },
  },
  entry: './src/index.js',
  mode: 'none',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        exclude: /node_modules/,
        resolve: {
          extensions: ['', '.js', '.jsx'],
        },
        test: /\.(?:js|jsx|mjs|cjs)$/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              [
                '@emotion',
                {
                  importMap: {
                    '@mui/material/styles': {
                      styled: {
                        canonicalImport: ['@emotion/styled', 'default'],
                        styledBaseImport: ['@mui/material/styles', 'styled'],
                      },
                    },
                    '@mui/system': {
                      styled: {
                        canonicalImport: ['@emotion/styled', 'default'],
                        styledBaseImport: ['@mui/system', 'styled'],
                      },
                    },
                  },
                },
              ],
            ],
            presets: [
              ['@babel/preset-env', { targets: 'defaults' }],
              ['@babel/preset-react'],
            ],
          },
        },
      },
    ],
  },
  output: {
    clean: true,
    filename: 'bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.ejs',
      title: 'Webpack App',
    }),
    new MiniCssExtractPlugin(),
    // fix "process is not defined" error:
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
};
