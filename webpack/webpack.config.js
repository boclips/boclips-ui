const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src",
  target: "web",
  mode: "production",
  output: {
    filename: "index.js",
    libraryTarget: "umd",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".less"],
  },
  externals: [
    {
      react: "react",
      reactDOM: "react-dom",
    },
    /^antd[.]*/,
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: ["/node_modules/", "/storybook"],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
              ],
              plugins: [
                "@babel/plugin-syntax-jsx",
                "@babel/plugin-transform-react-jsx",
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread",
                [
                  "import",
                  {
                    libraryName: "antd",
                    style: true,
                  },
                ],
              ],
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
              modules: {
                localIdentContext: __dirname,
                localIdentName: "[local]--[hash:base64:5]",
                mode: "local",
              },
            },
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
        test: /.svg$/i,
        exclude: /node_modules/,
        oneOf: [
          {
            use: [
              { loader: "file-loader" },
              { loader: "image-webpack-loader" },
            ],
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
  plugins: [new MiniCssExtractPlugin({ filename: "[name].css" })],
};
