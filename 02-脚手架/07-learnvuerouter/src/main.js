import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.prototype.test = function () {
  console.log('log');
}

let obj = {};
// 等同于 obj.age = 19;
Object.defineProperty(obj, 'age', {
  get() {
    return 19
  }
})
// console.log(obj.age);

/* eslint-disable no-new */
new Vue(
  // options 对象的属性
  {
    el: '#app',
    router,
    render: h => h(App)
  }
)





