const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')


// webpack配置文件（遵循commonjs规范）
module.exports = {
    // 入口：webpack分析项目依赖的起点
    entry:{
        main:'./src/main.js',
    },

    // 测试服务器：只在开发环境有效
    devServer:{
        // 服务器根目录
        contentBase:'./src',
        open:true
    },

    resolve:{
        // 设置目录别名
        alias:{
            '@':path.resolve(__dirname,'./src'),
            '@@':path.resolve(__dirname,'./src/components'),
            '~':path.resolve(__dirname,'./src/pages')
        },
        extensions:['.js','.jsx']
    },

    // 加载器
    module:{
        rules:[
            // 配置文件编译规则（每一种文件必须配置一个loader）
            {
                test:/\.jsx?$/,
                
                // include/exclude包含/排除
                // exclude:'node_modules',
                include:path.resolve(__dirname,'./src'),
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-react'],
                        plugins:[
                            ["import", {
                              "libraryName": "antd",
                              "libraryDirectory": "es",
                              "style": "css" // `style: true` 会加载 less 文件
                            }],
                            ['@babel/plugin-proposal-decorators',{legacy: true}],
                           '@babel/plugin-proposal-class-properties',
                        ]
                    }
                },
                // 简写
                //loader:'babel-loader'
            },

            // css加载器：解析css -> 往html中写入style标签
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },

            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            // 指定模板文件
            template:'./src/template.html',
            // filename:'main.html'
        })
    ]
}