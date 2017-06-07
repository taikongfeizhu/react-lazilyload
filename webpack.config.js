/*
 * Created by wjx on 2017/4/18.
 */
const path = require('path');

const reactExternal = {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
};
const propTypesExternal = {
    root: 'PropTypes',
    commonjs2: 'prop-types',
    commonjs: 'prop-types',
    amd: 'prop-types',
};

module.exports = {
    entry: {
        index: 'src/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        pathinfo: true,
        library: "LazilyLoad",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js(x)*$/,
            exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    externals: {
        'react': reactExternal,
        'prop-types': propTypesExternal
    },
    resolve: {
        modules: [
            path.resolve(__dirname),
            'node_modules'
        ]
    },
};
