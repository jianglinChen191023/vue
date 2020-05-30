<template>
  <div>
    <h2 class="title">{{message}}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{name}}</h2>
    <Cpn></Cpn>
  </div>
</template>

<script>
  import Cpn from './Cpn'

  export default {
    name: "App",
    components: {
      Cpn
    },
    data() {
      return {
        message: 'HELLO WEBPACK 我的小星星',
        name: '星星'
      }
    },
    methods: {
      btnClick() {

      }
    }
  }
</script>

<style scoped>
  .title {
    color: #5cb85c;
  }
</style>