/**
 babel.config.js with useful plugins.
 */
module.exports = function (api) {
  api.cache(true);
  api.assertVersion("^7.4.5");

  const presets = [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript",
  ];
  const plugins = [
    "@babel/plugin-syntax-jsx",
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-transform-class-properties",
    "@babel/plugin-transform-object-rest-spread",
    "@babel/plugin-transform-runtime",
    [
      "import",
      {
        libraryName: "antd",
        style: true,
      },
    ],
  ];

  return {
    presets,
    plugins,
  };
};
