<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <!--    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace active-class="active">关于</router-link>-->

    <!--    <button @click="homeClick">首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->

    <router-link to="/home" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <br/>
    <!--  参数传递  -->
    <router-link :to="'/user/'+userId" tag="button">用户</router-link>
    <router-link :to="{path: '/profile', query: {name: 'xiaoming'}}" tag="button">档案</router-link>
    <br/>
    <button @click="userClick">用户</button>
    <button @click="profileClick">档案</button>

    <keep-alive exclude="Profile,User">
      <router-view/>
    </keep-alive>

    <h2>我是版权信息</h2>
  </div>
</template>

<script>
  export default {
    name: 'App',

    data: function () {
      return {
        userId: 'lisi'
      }
    },
    methods: {
      homeClick() {
        // 通过代码的方式修改路由 vue-router
        // push => pushState
        // this.$router.push('/home');
        this.$router.replace('/home')
        console.log('homeClick');
      },
      aboutClick() {
        this.$router.push('/about');
        this.$router.replace('/about')
        console.log('aboutClick');
      },
      userClick() {
        this.$router.push('/user/' + this.userId)
      },
      profileClick() {
        this.$router.push({
          path: '/profile',
          query: {
            name: 'kobe',
            age: 19
          }
        })
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  /*!* 默认的样式名 *!*/
  /*.router-link-active {*/

  /*}*/

  /*.active {*/
  /*  color: red;*/
  /*}*/


</style>
