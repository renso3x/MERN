var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module: {
        loaders: [
            // js
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'client'),
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                }
            },
            // CSS
            {
                test: /\.styl$/,
                include: path.join(__dirname, 'client'),
                loader: 'style-loader!css-loader!stylus-loader'
            }
        ]
    },
    node: {
        net: 'empty',
        dns: 'empty'
    }
};
