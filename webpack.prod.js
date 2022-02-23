const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");
const HtmlWebpackInlineSVGPlugin = require("html-webpack-inline-svg-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin");
const zlib = require("zlib");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const glob = require("glob-all");

function TailwindExtractor(content) {
  // Capture as liberally as possible, including things like `h-(screen-1.5)`
  const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];

  // Capture classes within other delimiters like .block(class="w-1/2") in Pug
  const innerMatches = content.match(/[^<>"'`\s.(){}]*[^<>"'`\s.(){}:]/g) || [];

  return broadMatches.concat(innerMatches);
}

const configurePurgeCss = () => {
  let paths = [];
  // Configure whitelist paths
  for (const [key, value] of Object.entries([
    "./src/templates/**/*.{twig,html}",
    "./src/js/**/*.js",
  ])) {
    paths.push(path.join(__dirname, value));
  }

  return {
    paths: glob.sync(paths),
    extractors: [
      {
        extractor: TailwindExtractor,
        extensions: ["html", "js"],
      },
    ],
  };
};

module.exports = {
  stats: "normal",
  mode: "production",
  entry: {
    app: [
      "./src/js/index.js",
      "./src/css/app.pcss",
      "./src/fonts/montserrat-300.woff2",
      "./src/fonts/montserrat-600.woff2",
      "./src/fonts/tangerine.woff2",
    ],
  },
  devtool: "source-map",
  output: {
    filename: path.join("./js", "[name].[chunkhash].js"),
    publicPath: "/dist/",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(ttf|eot|woff2?)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/i,
        use: [
          {
            loader: "responsive-loader",
            options: {
              adapter: require("responsive-loader/sharp"),
              name: "img/[name]-[width].[hash].[ext]",
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
                "...",
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
        test: /\.(pcss|css)$/,
        use: [
          MiniCssExtractPlugin.loader,
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
  optimization: {
    minimize: true,
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  plugins: [
    new CleanWebpackPlugin({
      verbose: true,
      dry: false,
    }),
    new MiniCssExtractPlugin({
      filename: path.join("./css", "[name].[hash].css"),
    }),
    new PurgecssPlugin(configurePurgeCss()),
    new CompressionPlugin({
      filename: "[path][base].br",
      algorithm: "brotliCompress",
      test: /\.(js|css|html|svg)$/,
      compressionOptions: {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
        },
      },
      threshold: 10240,
      minRatio: 0.8,
      deleteOriginalAssets: false,
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
      filename: "../index.html",
    }),
    new HtmlWebpackInlineSVGPlugin({
      runPreEmit: true,
      inlineAll: true,
    }),
    new FaviconsWebpackPlugin({
      logo: "./src/img/favicon.svg",
      cache: true,
      outputPath: "/img",
      prefix: "/dist/img/",
      inject: true,
    }),
    new ImageMinimizerPlugin({
      severityError: "errors",
      minimizerOptions: {
        plugins: [
          ["gifsicle", { interlaced: true }],
          ["mozjpeg", { quality: 85 }],
          ["optipng", { optimizationLevel: 3 }],
          [
            "svgo",
            {
              plugins: [
                {
                  removeViewBox: false,
                },
              ],
            },
          ],
        ],
      },
    }),
  ],
};
