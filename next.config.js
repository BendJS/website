const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const withTypescript = require('@zeit/next-typescript');

module.exports = withTypescript({
  webpack(config, options) {
    if (options.isServer) {
      config.plugins.push(new ForkTsCheckerWebpackPlugin());
    }
    return config;
  }
});
