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
body{
  height: 1.5;
}
a{
  text-decoration: none;
  // 去掉字体自带的下划线
  color: inherit;
  //  inherit继承
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
