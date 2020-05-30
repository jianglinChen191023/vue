<template>
  <div>
    <h2>我是关于</h2>
    <p>我是内容, 哈哈哈</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    created(){
      // console.log('create');
      document.title = '关于'
    }
  }
</script>

<style scoped>

</style>
