const { merge } = require('webpack-merge');
const common = require('../webpack.config.js');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const variables = require('../variables').variables;

console.log(variables.HTML_TEMPLATE.PARAMETERS);

module.exports = merge(common, {
    plugins: [
        new HtmlWebpackPlugin({
            templateParameters: variables.HTML_TEMPLATE.PARAMETERS,
            template: variables.HTML_TEMPLATE.TEMPLATE
        })
    ]
});