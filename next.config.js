const withSass = require('@zeit/next-sass');

module.exports = withSass({
  webpack(config, options) {
    return config;
  },
  cssModules: true
});
