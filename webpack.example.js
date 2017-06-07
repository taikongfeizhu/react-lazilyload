/*
 * Created by wjx on 2017/4/18.
 */
const path = require('path');

module.exports = {
    entry: {
        example1: 'example/src/example1.js',
        example2: 'example/src/example2.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'example/dist'),
        pathinfo: true,
    },
    module: {
        rules: [{
            test: /\.js(x)*$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDom',
        'prop-types': 'PropTypes'
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ]
    },
};
