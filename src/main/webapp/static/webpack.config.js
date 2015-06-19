// webpack config
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        register: './js/user/register.js',
        login: './js/user/login.js',
        profile: './js/user/profile.js'
    },
    output: {
        path: './build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'jsx-loader?harmony'}
        ]
    },
    plugins: [commonsPlugin]
};
