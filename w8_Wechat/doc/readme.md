# 微信开发
* 公众号
* 小程序

## day8-2

### 知识点
* 准备工作
    * 注册
    * 后台配置
    * 开发者工具勾选项
* 文件类型（根据后缀名的不同区分）
    * .json  配置文件
    * .js    逻辑文件
    * .wxss  样式文件
    * .wxml  结构文件
    * .wxs   模块文件
* 文件类型（根据作用范围不同区分）
    * 全局文件
    * 页面级别文件
* 页面类型（根据跳转方式不同区分）
    * 普通页面
    * tabBar页面
```js
    index     sliderOffset
        0       0
        1       tabWidth
        2       2*tabWidth
    推导公式：sliderOffset = tabWidth*index

    tabData = {1:[],2:[],11:[]}
    tabData['11']
    tabData['2'];
```

## day8-5

### 复习
* 小程序开发使用的技术
    * 组件
        * swiper
        * view
        * text
        * navigator
        * 模板
            * import/include
            * template
                * name
                * is
                * data
    * API
        * wx.request
        * wx.navigateTo
        * wx.getSystemInfo
    * 往事件处理事件传参
        * 利用自定义属性传参：data-xxx
        * 获取：e.currentTarget.dataset.xxx
    * 在小程序中使用async&await
        * 引入 `const regeneratorRuntime = require("regenerator-runtime");`
    * 在小程序中使用npm包
        1. 勾选`使用npm模块`
        2.  `工具` -> `构建npm`
        3. `require('xxx')`
* 扩展运算符使用场景
    * `{...obj}`  把obj中所有属性扩展到对象中（等效于浅复制）
    * `[...arr]`  把arr中所有数组元素扩展到数组中（等效于浅复制）
    * `show(...params)`  函数调用是使用：params只能是数组，等效于`show(params[0],params[1],....)`
    * `function show(a,...params){}`函数定义时使用：  params是一个数组，把除a以外的所有参数，写入params数组
        * `show(10,20,30)`  结果：`a=10,params=[20,30]`
        * `show(10)`  结果：`a=10,params=[]`

* offset计算(size:5)
[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]
page    offset
1       0
2       5
3       10
4       15
推导公式：offset = (page-1)*size
    
