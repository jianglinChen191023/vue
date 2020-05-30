<template>
  <div>
    <p>我是cpn组件的内容</p>
      <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Cpn",
    data() {
      return {
        name: 'CPN组件的name'
      }
    }
  }
</script>

<style scoped>

</style>