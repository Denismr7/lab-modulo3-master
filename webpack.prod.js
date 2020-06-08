const merge = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
    mode: "development",
    output: {
        filename: "bundle.[contentHash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  MiniCSSExtractPlugin.loader,
                  // Translates CSS into CommonJS
                  'css-loader',
                  // Compiles Sass to CSS
                  'sass-loader',
                ],
              },
        ]
    }
})