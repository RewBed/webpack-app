const { merge } = require('webpack-merge');
const common = require('../webpack.config.js');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const variables = require('../variables').variables;

module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: {
                title: variables.HTML_TEMPLATE.TITLE
            },
            template: variables.HTML_TEMPLATE.TEMPLATE
        })
    ]
});