const path = require('path');
const rootPath = path.normalize(__dirname + '/../');

module.exports = {
    development: {
        db: 'mongodb://localhost/activityoverlord',
        rootPath: rootPath,
        port: process.env.PORT || 9090
    },
    production: {
        db: 'mongodb://multivision:multivision@ds017173.mlab.com:17173/multivision',
        rootPath: rootPath,
        port: process.env.PORT || 80
    }
}