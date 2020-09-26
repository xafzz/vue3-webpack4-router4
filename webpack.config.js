const path = require('path');
//vue-loader was used without the corresponding plugin. Make sure to include VueLoaderPlugin in your webpack config
//vue3.0 不再用 vue-template-compiler
//添加 vue-template-compiler
const {VueLoaderPlugin} = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development', //'development' or 'production'
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    devServer :{
        // port: 8000,
        // host: 'localhost',
        overlay: {
            errors: true // 将webpack编译的错误显示在网页上面
        },
        open: true // 在启用webpack-dev-server时，自动打开浏览器
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({template: './src/template/index.html'})
    ],
    resolve: {
        alias: {
            '@': require('path').join(__dirname, 'src')
        }
    }

};
