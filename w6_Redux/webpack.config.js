const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


// webpack配置文件（遵循commonjs规范）
module.exports = {
    // 入口：webpack分析项目依赖的起点
    entry:{
        main:'./src/main.js',
    },

    mode:'production',

    // 出口:用于编译
    output:{
        path:__dirname + "/dist",
        filename:'bundle-[name]-[hash:5].js',//bundle-main-xsdkfj.js
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
            },

            // 静态资源(图片)
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: [{
                    loader:'url-loader',
                    options: {
                        limit: 10000,// 图片小于10k,则转成Base64编码来表示
                      
                        // 给文件改名并存放到相应目录
                        name: '../dist/img/[name].[hash:5].[ext]'
                    }
                }]
                
            }
        ]
    },

    plugins:[
        new HtmlWebpackPlugin({
            // 指定模板文件
            template:'./src/template.html',
            // filename:'main.html'
        }),

        // 原理:先删除dist文件夹,然后在生成一个新的
        new CleanWebpackPlugin()//参数：Object或无
    ]
}