let name = '小明'
let age = 19
let flag = true

function sum(num1, num2) {
  return num1 + num2;
}

if (flag) {
  console.log(sum(20, 30));
}

// 1.导出方法一
export {
  flag,
  sum
}

// 2.导出方法二
export var num1 = 10000;
export var height = 1.99;

// 3.导出函数/类
export function nu1(num1, num2) {
  return num1 + num2;
}

// 4. 导出类
export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 5. 导出默认
// const address = '北京市'
// export default address

export default function (argument) {
  console.log(argument);
}
