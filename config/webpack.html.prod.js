const { merge } = require('webpack-merge');
const common = require('./webpack.html');

module.exports = merge(common, {
    watch: false,
    mode: 'production',
});