import View from './components/view'
import Link from './components/link'

export let _Vue

export function install(Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

  _Vue = Vue

  const isDef = v => v !== undefined

  // 注册实例
  const registerInstance = (vm, callVal) => {
    let i = vm.$options._parentVnode
    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal)
    }
  }

  Vue.mixin({
    // 创建之前
    beforeCreate() {
      // this.$options.router 获取Vue对象中 的router选项
      // 如果选项对象(options)中的属性 router不为 undefined(如果选项对象(options)中的属性router存在,进入判断,继续执行)
      if (isDef(this.$options.router)) {
        // 将 Vue实例赋值给 this._routerRoot
        this._routerRoot = this // this是成员函数的一个特殊的固有的本地变量,它表达了调用这个函数那个对象
        // 将设置的router 赋值给this._router
        this._router = this.$options.router
        //
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      } else {
        this._routerRoot = (this.$parent && this.$parent._routerRoot) || this
      }
      registerInstance(this, this)
    },
    destroyed() {
      registerInstance(this)
    }
  })

  // let obj = {};
  // 等同于 obj.age = 19;
  //   Object.defineProperty(obj, 'age', {
  // get() {
  //   return 19
  // }
  // })
  // console.log(obj.age);

  // Vue.prototype.$router = this._routerRoot._router
  Object.defineProperty(Vue.prototype, '$router', {
    get() {
      return this._routerRoot._router
    }
  })

  // 将this._routerRoot._route(当前活跃的组件对象) 赋值给Vue.prototype 中的 $route
  Object.defineProperty(Vue.prototype, '$route', {
    get() {
      return this._routerRoot._route
    }
  })

  // 注册全局组件
  Vue.component('RouterView', View)
  Vue.component('RouterLink', Link)

  const strats = Vue.config.optionMergeStrategies
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created
}
