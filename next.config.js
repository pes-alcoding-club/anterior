const webpack = require('webpack');
const withCSS = require('@zeit/next-css');

const isProduction = (process.env.NODE_ENV || 'production') === 'production';
const serverURL = isProduction ? "https://posterior.herokuapp.com" : "http://localhost:4000/api";

module.exports = withCSS({
    exportTrailingSlash: true,
    serverURL: serverURL,
    webpack: config => {
        config.plugins.push(
            new webpack.DefinePlugin({
                'process.env.serverURL': JSON.stringify(serverURL),
            }),
        );
        return config
    },
});
