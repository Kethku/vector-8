import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import HtmlWebpackRootPlugin from 'html-webpack-root-plugin';
import MonacoWebpackPlugin from 'monaco-editor-webpack-plugin';
import WasmPackPlugin from '@wasm-tool/wasm-pack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.glsl', '.txt', '.css', '.rs']
  },
  module: {
    strictExportPresence: true,
    rules: [
      { 
        test: /\.tsx?$/,  
        exclude: /node_modules/,
        loader: 'ts-loader',
        options: {
          compilerOptions: {
            module: "esnext",
            moduleResolution: "node"
          }
        }
      },
      {
        test: /\.(glsl|txt)$/,
        use: {
          loader: 'raw-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Vector-8',
      meta: {
        "viewport": "width=device-width, user-scalable=false"
      }
    }),
    new HtmlWebpackRootPlugin(),
    new MonacoWebpackPlugin({
      languages: ['javascript', 'typescript']
    }),
    new WasmPackPlugin({
      crateDirectory: path.resolve(__dirname, ".")
    })
  ]
};

export default config;
