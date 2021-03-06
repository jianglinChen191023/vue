// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)

// 高阶函数:
// filter/map/reduce
// filter中的回调函数有一个要求:　必须返回一个boolean值
// //   true:　当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
// //   false: 当返回false时, 函数内部会过滤掉这次n

// 1.需求:  小于100的数字
// 2.需求:  所有小于100的数字进行转化: 全部*2
// 3.需求:  数字相加 ,得到最终的结果
const nums = [10, 20, 40, 111, 222, 333, 50]

let total = nums.filter(n => n < 100)
    .map(n => n * 2)
    .reduce((pre, n) => pre + n)
// console.log(total)

//
// let total = nums.filter(function (n) {
//   return n < 100
// }).map(function (n) {
//   return n * 2
// }).reduce(function (previousValue, n) {
//   return previousValue + n
// }, 0)
// console.log(total)

// // 1.需求: 取出 nums 中小于100的数字
// let newNums = nums.filter(function (n) {
//   return n < 100
// })
// console.log(newNums)
//
// // 2.需求: 将 newNums 所有小于100的数字进行转化: 全部*2
// let new2Nums = newNums.map(function (n) {
//   return n * 2
// })
// console.log(new2Nums)
//
// // 3. reduce函数的使用
// // 3.需求: 将 new2Nums 数字相加 ,得到最终的结果
// let total = new2Nums.reduce(function (preValue, n) {
//   return preValue + n
// }, 0)
// console.log(total)
// // 第一次: preValue 0 ;n 20
// // 第二次: preValue 20 ;n 40
// // 第三次: preValue 60 ;n 80
// // 第四次: preValue 140 ;n 100
// // 240


// // 1.需求: 取出 nums 中小于100的数字
// let newNums = []
//
// for (const num of nums) {
//   if (num < 100) {
//     newNums.push(num)
//   }
// }
//
// // 2.需求: 将newNums所有小于100的数字进行转化: 全部*2
// let new2Nums = []
// for (const num of newNums) {
//   new2Nums.push(num * 2)
// }
//
// console.log(new2Nums)
//
// // 3.需求: 将 new2Nums 数字相加 ,得到最终的结果
// let total = 0;
// for (const num of new2Nums) {
//   total += num;
// }
//
// console.log(total)