// 变量声明格式：var [变量名] : [类型] = 值;
// 在编译阶段对类型进行检查
let username:string = 'laoxie';
let age:number = 18;

// 定义不赋值，类型为undefined
let gender;

// 定义不指定类型，ts会使用`类型推论`规则来指定变量类型
let nickname = 'qianfeng laoxie';// 等效于 let nickname:string = 'qianfeng laoxie'

// 任意类型
let data:any = 100;

data = 'data 100';

// @数组
// 在ts中要求数组元素必须为同类型
let arr:number[] = [10,20,30];

// 泛型编程
let usernames:Array<string> = ['laoxie','lemon','jingjing']

// @元组
// 数组元素中类型不一致，称为元组
let tuple_data = [10,'jingjing',true];


// @函数定义
// 在ts必须指定参数类型与返回值类型
// 函数定义与执行参数必须一致
// * 可选参数： age?
// * 参数默认值：gender:string="男" (带默认值的参数被定义成可选参数)
function hello(username:string,age?:number,gender:string='男'):string{
    return `hello avbody my name is ${username}, I'm ${age} years old!`
}

hello('laoxie',18);
hello('jingjing');
// hello(100);//undefined

// 接口interface
interface Person{
    name:string;
    age:number;
    readonly gender?:string;
    say():number
}

function person(obj:Person){

}

let laoxie:Person = {name:'laoxie',age:18,say(){return 100}}
laoxie.age = 19;
// laoxie.gender = '女'; // readonly属性不可修改