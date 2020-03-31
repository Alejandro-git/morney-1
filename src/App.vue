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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  font-size: 16px;
  height: 1.5;
}
// .clearfix::after{
//   content: '';
//   display: block;
//   clear: both;
//   // clearfix经典写法
//   // 需要buttons上添加“clearfix”
// }
// 这里在helper.scss使用placeholder定义全局变量，
</style>
