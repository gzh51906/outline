// ES6
// class Person{
//     constructor(name){
//         this.name = name;
//     }
// }

// // 实例化
// let laoxie = new Person('laoxie');


class Person{
    // 定义实例属性
    // name:string = 'laoxie'

    // 默认为公共属性public
    public readonly name:string;

    // 私有属性（只能在当前类中访问）
    private age:number;
    

    // protected 受保护
    protected gender:string = '男';

    constructor(name:string,age){
        this.name = name
    }

    say(){
        console.log(this.age);
    }
}

class Student extends Person{

    hell(){
        console.log(this.gender);//
    }
}

let lx = new Person('laoxie',18);
lx.name;//laoxie
// lx.age;//私有属性无法访问
lx.gender;// 受保护的属性无法在外部访问