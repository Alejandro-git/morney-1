<template>
  <div>  
    <router-view>
      <!-- router-wiew 指定组件显示的位置 -->
    </router-view>  
  </div>
</template>

<style lang="scss">
// 这里style不加scoped，
// 因为scoped有特殊处理，只会渲染一部分
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
