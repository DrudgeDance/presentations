import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';


const outputPath = isProduction ? path.resolve(__dirname, 'dist') : path.resolve(__dirname, 'devdist');

export default {
  entry: './src/index.js',
  optimization: {
    splitChunks: {
        cacheGroups: {
            default: false
        }
    },
    concatenateModules: true
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  devServer: {
    static: {
      directory: outputPath,
      publicPath: '/',
    },
    historyApiFallback: true,
    proxy: [
      {
        context: ['/wauth'],
        target: `http://localhost:${process.env.BACKEND_PORT || 3000}`,
        secure: false,
        changeOrigin: true,
        cookieDomainRewrite: 'localhost',
      },
      {
        context: ['/youtube'],
        target: 'https://www.youtube.com',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/youtube': '' },
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};