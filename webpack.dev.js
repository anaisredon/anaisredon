const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");

module.exports = {
  mode: "development",
  entry: {
    app: [
      "./src/js/index.js",
      "./src/css/app.pcss",
      "./src/fonts/montserrat-300.woff2",
      "./src/fonts/montserrat-600.woff2",
      "./src/fonts/tangerine.woff2",
    ],
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./src/templates/"),
    port: "8081",
    watchContentBase: true,
    hot: true,
  },
  output: {
    publicPath: "/",
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "responsive-loader",
            options: {
              adapter: require("responsive-loader/sharp"),
              name: "img/[name]-[width].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(html)$/i,
        use: {
          loader: "html-loader",
          options: {
            attributes: {
              list: [
                {
                  tag: "meta",
                  attribute: "content",
                  type: "src",
                  filter: (_tag, _attribute, attributes, _resourcePath) => {
                    if (
                      attributes.property === "og:image" ||
                      attributes.property === "twitter:image"
                    ) {
                      return true;
                    }
                    return false;
                  },
                },
                {
                  tag: "img",
                  attribute: "data-src",
                  type: "src",
                },
                {
                  tag: "img",
                  attribute: "data-srcset",
                  type: "srcset",
                },
                {
                  tag: "source",
                  attribute: "data-srcset",
                  type: "srcset",
                },
              ],
              urlFilter: (attribute, value, resourcePath) => {
                if (/\.(js|css|svg)$/.test(value)) {
                  return false;
                }

                return true;
              },
            },
          },
        },
      },
      {
        test: /\.(pcss|css)$/i,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              sourceMap: true,
            },
          },
          {
            loader: "resolve-url-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      filename: "index.html",
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
      inlineAll: true,
    }),
  ],
};
