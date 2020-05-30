<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户的相关信息</p>
    <h2>{{userId}}</h2>
    <h2>{{$route.params.id}}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    created() {
      console.log('create');
      // document.title = '用户'
    },
    computed: {
      userId() {
        return this.$route.params.id
      }
    },
    methods: {
      btnClick() {
        // 所有的组件都继承自Vue的原型
        console.log(this.$route);
        console.log(this.$router);

        this.test();
      }
    }
  }
</script>

<style scoped>

</style>
