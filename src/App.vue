<template>
  <div id="app">
    <router-view>
      <!-- router-wiew 指定组件显示的位置 -->
    </router-view>
  </div>
</template>

<style lang="scss">
// 这里style不加scoped，
// 因为scoped有特殊处理，只会渲染当前页面

@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  height: 1.5;
}
</style>
