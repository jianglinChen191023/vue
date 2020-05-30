<template>
  <div>
    <h2>我是首页</h2>
    <p>范德萨发大水</p>

    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>

    <!--    <router-view></router-view>-->
    <router-view/>

    {{message}}
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        message: '你好啊',
        path: '/home/message'
      }
    },
    // 生命周期
    // 创建组件
    created() {
      console.log('Home create');
      // document.title = '首页'
    },
    // 销毁
    destroyed() {
      console.log('Home destroyed');
    },
    // 这两个函数, 只有该组件被保持了状态使用了keep-alive时,才有效
    activated() {
      console.log('activated');
      this.$router.push(this.path)
    },
    deactivated() {
      console.log('deactivated');
      // console.log(this.$router.path);
    },
    // 跳转路由之前
    beforeRouteLeave(to, from, next) {
      console.log(this.$route.path);
      this.path = this.$route.path;
      next()
    }
  }
</script>

<style scoped>

</style>
