var moduleA = (function () {
  var obj = {};

  // 小明
  var name = '小明';
  var age = 22;

  function sum(num1, num2) {
    return num1 + num2;
  }

  var flag = true;

  if (flag) {
    console.log(sum(10, 20));
  }

  obj.flag = flag;
  obj.sum = sum;

  return obj
})()

// 小明
var name = '小明';
var age = 22;

function sum(num1, num2) {
  return num1 + num2;
}

var flag = true;

if (flag) {
  console.log(sum(10, 20));
}

// module.exports = {
//   flag,
//   sum
// }
