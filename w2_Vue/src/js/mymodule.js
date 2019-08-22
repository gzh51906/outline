/**
 * 这是一个ESModule规范的模块，每一个模块都有一个<模块对象>
 * 它具有独立的作用域，这里定义的变量只能在当前模块中使用
 * 要在其他模块中使用，必须导出
 */


var password = 123;


// 给模块对象添加一个dingding属性
export var dingding = {
    username:'dingding',
    age:30
}

//给模块对象添加一个show方法
export function show(){

}

// 设置模块对象的默认属性default
export default password;


// 一次性给模块对象添加多个属性
let a = 10;
let b = 20;
export {
    a,
    b
}