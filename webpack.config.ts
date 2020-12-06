/* eslint-disable import/no-extraneous-dependencies */
import * as path from 'path';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  target: 'web',
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: 'luscher-test',
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  resolve: {
    extensions: ['.ts'],
    plugins: [new TsconfigPathsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          compiler: 'ttypescript',
          configFile: 'tsconfig.build.json',
        },
      },
    ],
  },
  optimization: {
    minimize: true,
  },
};

export default config;
