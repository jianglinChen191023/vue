// 1.使用commonjs的模块化规范
const {add,nu1} = require('./mathUtil')

console.log(add(20, 30));
console.log(nu1(20, 30));

// 2.使用ES6的模块化的规范
import {name,age,height} from "./info";

console.log(name);
console.log(age);
// console.log(height);