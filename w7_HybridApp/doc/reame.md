# HybridApp

## day7-3
* App类型
    * webApp    通过浏览器访问
    * NativeApp
        * android
        * iOS
    * HybridAp  
        * webView   浏览器

    * 在js代码中调用Native接口
        * 通过window对象进项交互
        ```js
            moxiu.exits()
            moxiu.takePhoto()

            window.laoxie = {
                show(data){
                    console.log(data)
                }
            }
        ```
* DCloud平台
    * 5+Runtime调用硬件API
        > 通过window.plus
        * Camera


## day7-4

### 知识点
* 定位
    * geolocation（html5新特性）
        * 获取：window.navigator.geolocation
        * 方法
            * getCurrentPosition(success,error,options)
                > {coords:{longitude,latitude}}
            * watchPosition()
            * clearWatch() 
            

