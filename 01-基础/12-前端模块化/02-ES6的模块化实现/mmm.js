// 1.导入的{}中定义变量
import {flag, sum} from "./aaa.js";

if (flag) {
  console.log('小明是天才, 哈哈哈');
}

// 2. 导入变量
import {num1, height} from "./aaa.js";

console.log(num1);
console.log(height);

// 3. 导入函数
import {nu1} from "./aaa.js";
import {Person} from "./aaa.js";

console.log(nu1(100, 324));

// 类
const person = new Person();
person.run()

// 4. 导入默认,自己命名
import addr from './aaa.js';
// console.log(addr);
addr('调用导入的函数')

// 5. 统一全部导入
import * as aaa from './aaa.js';

console.log(aaa.flag);