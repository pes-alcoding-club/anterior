const isProduction = (process.env.NODE_ENV || 'production') === 'production';
const withCSS = require('@zeit/next-css');

module.exports = withCSS();
