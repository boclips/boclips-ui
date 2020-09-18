const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src",
  output: {
    filename: "[name].[contenthash:8].js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".less"],
  },
  optimization: {
    runtimeChunk: "single",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // get the name. E.g. node_modules/packageName/not/this/part.js
            // or node_modules/packageName
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1];

            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace("@", "")}`;
          },
        },
      },
    },
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env", "@babel/preset-react"],
              plugins: [
                "@babel/plugin-syntax-jsx",
                "@babel/plugin-transform-react-jsx",
              ],
            },
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /^((?!\.module).)*less$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.module.less$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                localIdentName: "[name]__[local]--[hash:base64:5]",
                mode: "local",
              },
            },
          },
          {
            loader: "less-loader",
          },
        ],
      },
      {
        test: /.svg$/i,
        exclude: /node_modules/,
        oneOf: [
          {
            loader: ["file-loader", "image-webpack-loader"],
            resourceQuery: /inline/,
          },
          {
            loader: "svg-react-loader",
            options: {
              props: {
                role: "img",
              },
            },
          },
        ],
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: ["file-loader", "image-webpack-loader"],
      },
      {
        test: /\.svg$/i,
        include: /node_modules/,
        use: ["file-loader", "image-webpack-loader"],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: "[name]-[hash:20].css" }),
    // new BundleAnalyzerPlugin(),
  ],
};
