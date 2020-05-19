import Vue from '../../..'

export default context => {
  return new Promise(resolve => {
    context.msg = 'hello'
    resolve(new Vue({
      render (h) {
        return h('div', context.url)
      }
    }))
  })
}
