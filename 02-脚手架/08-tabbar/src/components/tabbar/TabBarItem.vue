<template>
  <div class="tab-bar-item" @click="itemClick">
    <did v-if="!isActive">
      <slot name="item-icon"></slot>
    </did>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="[activeStyle]">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        // console.log('itemClick');
        console.log(this.path);
        console.log(this.$route.path);
        // 避免冗余导航
        if (!this.isActive) {
          this.$router.replace(this.path)
        }
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 2;
    text-align: center;
    height: 49px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
  }
</style>
