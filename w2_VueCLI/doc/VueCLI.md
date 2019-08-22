# VueCLI

## 安装
```bash
    npm install -g @vue/cli
    #or
    yarn global add @vue/cli
```
### 依赖与扩展
* @vue/cli-service
    * @vue/cli-service-global
* webpack
    * webpack-dev-server
* CLI 插件

## 快速原型开发
零配置开发或编译单个.vue文件（需全局安装@vue/cli-service-global）
* 
```bash
    # 测试
    vue serve ./App.vue

    # 编译
    vue build ./App.vue
```

## 创建项目vue create
```bash
    # 命令行
    vue create myproject

    # 使用图形化界面
    vue ui
```

## 插件安装vue add
```bash
    vue add @vue/eslint #等效于 vue add @vue/cli-plugin-eslint

    # 路由
    vue add router

    # vuex
    vue add vuex
```

## jvue.config.js配置
* publicPath
* outputDir
* assetsDir
* runtimeCompiler