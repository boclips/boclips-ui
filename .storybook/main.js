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
            require.resolve('less-loader')
          ]
        },
    );
    return config;
  },
}
