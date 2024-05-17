/* eslint-disable spellcheck/spell-checker */
const ENV = {
  development: 'development',
  production: 'production',
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const webpack = require('webpack');

module.exports = (env) => {
  const NODE_ENV = env.NODE_ENV;
  const isDevelopment = NODE_ENV !== ENV.production;
  require('dotenv').config({ path: `./.env.${NODE_ENV}` });
  return {
    devServer: {
      hot: true,
      port: 9000,
      static: {
        directory: path.join(__dirname, 'dist'),
      },
    },
    devtool: 'source-map',
    entry: './src/index.js',
    mode: isDevelopment ? ENV.development : ENV.production,
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          oneOf: [
            {
              exclude: [/node_modules/],
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
                              styledBaseImport: [
                                '@mui/material/styles',
                                'styled',
                              ],
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
            {
              exclude: [/node_modules/],
              test: /\.[jt]sx?$/,
              use: {
                loader: 'babel-loader',
                options: {
                  plugins: [isDevelopment && 'react-refresh/babel'].filter(
                    Boolean
                  ),
                },
              },
            },
          ],
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
        title: 'Weather App',
      }),
      new MiniCssExtractPlugin(),
      // fix "process is not defined" error:
      new webpack.ProvidePlugin({
        process: 'process/browser',
      }),
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new webpack.EnvironmentPlugin(Object.keys(process.env)),
    ].filter(Boolean),
    resolve: {
      extensions: ['', '.js', '.jsx'],
    },
  };
};
