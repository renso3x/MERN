var webpack = require('webpack');
var webpackConfig = require('../webpack.config.dev');
var compiler = webpack(webpackConfig);

/*
* webpack configuration
*/
module.exports = function(app) {
    app.use(require('webpack-dev-middleware')(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler));
}