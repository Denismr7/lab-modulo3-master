const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/main.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "img"
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
      },
    plugins: [new HtmlWebpackPlugin({
        template: "src/index.html"
    })]
}