# React

## day5-1

### 面试题
* 插槽<slot>
    * 命名插槽
        * v-slot:header
    * 作用域插槽
        * v-slot:header="xxx"
* 动态组件<component>
    * is
* 路由vue-router
    * <router-view>

### 知识点
* nvm管理Node版本
* npx的使用

* JSX
    * JSX -> JS : babel
    * 限制条件
    * 如何实现js与html的混写

* webpack：基于配置的构建工具
    * entry:入口
    * output:出口
    * devserver:测试服务器
        * contentBase
    * loader:加载器
        * babel-loader
    * plugins: 插件
        * 常用插件
            * html-webpack-plugin   生成html文件
* gulp：基于任务的构建工具
    ```js
        gulp.task('compileSass',()=>{
            gulp.src('./src/sass/*.scss')
            .pipe(sass())
            .pipe(gulp.dest('./src/css/'))
        })
    ```

* Vue 完整MVC架构的框架
* React 是一个视图层框，MVC中的View


* 组件化开发
    * 组件定义
        * 函数组件
        * 类组件
            * state
    * 组件通讯
