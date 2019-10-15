// ES6
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }
// // 实例化
// let laoxie = new Person('laoxie');
var Person = /** @class */ (function () {
    function Person() {
        // 定义实例属性
        this.name = 'laoxie';
    }
    return Person;
}());
var lx = new Person();
console.log(lx);
