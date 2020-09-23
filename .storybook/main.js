const path = require('path');

module.exports = {
  "stories": [
    "../lib/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    let rule = config.module.rules.find(
        r =>
            r.test &&
            r.test.toString().includes("svg") &&
            r.loader &&
            r.loader.includes("file-loader")
    );
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    config.module.rules.push(
        {
          test: /\.module.less$/,
          use: [
            require.resolve('style-loader'),
            {
              loader: require.resolve('css-loader'),
              options: {
                modules: true,
                importLoaders: 1,
              },
            },
            {
              loader:   require.resolve('less-loader'),
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ]
        },
    );
    return config;
  },
}
