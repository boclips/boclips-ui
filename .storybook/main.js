const path = require('path');

module.exports = {
  "stories": ["../lib/**/storybook/*.stories.@(ts|tsx)"],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-webpack5-compiler-babel'
  ],

  webpackFinal: async (config, {
    configType
  }) => {
    let rule = config.module.rules.find(r => r.test && r.test.toString().includes("svg"));
    rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    config.module.rules.push({
      test: /\.module.less$/,
      use: [require.resolve('style-loader'), {
        loader: require.resolve('css-loader'),
        options: {
          importLoaders: 1,
          modules: {
            mode: 'local',
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      }, {
        loader: require.resolve('less-loader'),
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }]
    }, {
      test: /^((?!\.module).)*less$/,
      use: [require.resolve('style-loader'), {
        loader: require.resolve('css-loader')
      }, {
        loader: require.resolve('less-loader'),
        options: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }]
    });
    return config;
  },

  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },

  docs: {
    autodocs: true
  }
};