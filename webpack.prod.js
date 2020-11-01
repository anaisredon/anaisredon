const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    app: "./src/js/index.js"
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./src/templates/"),
    port: "8081",
    watchContentBase: true,
    hot: true
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash].[ext]",
              emitFile: false
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(html)$/i,
        use: {
          loader: "html-loader",
          options: {
            attributes: {
              urlFilter: (attribute, value, resourcePath) => {
                if (/\.(js|css|svg)$/.test(value)) {
                  return false;
                }

                return true;
              }
            }
          }
        }
      },
      {
        test: /\.(pcss|css)$/i,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: "resolve-url-loader"
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/templates/index.html"),
      filename: "index.html"
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
      inlineAll: true
    }),
    new ImageMinimizerPlugin({
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["jpegtran", { progressive: true }],
          ["optipng", { optimizationLevel: 5 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false
                }
              ]
            }
          ]
        ]
      }
    })
  ]
};
