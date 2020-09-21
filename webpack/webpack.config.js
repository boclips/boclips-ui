const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  entry: "./src",
  target: "web",
  output: {
    filename: "index.js",
    libraryTarget: "umd",
    globalObject: "this",
    umdNamedDefine: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".less"],
  },
  externals: {
    react: "react",
    reactDOM: "react-dom",
    antd: "antd",
  },
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
              transpileOnly: false,
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
