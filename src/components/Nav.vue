
<template>
    <!-- 这作为一个全局组件 -->
    <div>
      <!-- 导航栏 
      vue 提供 router-link-->
      <router-link to="/money">记账</router-link>
      |
      <router-link to="/labels">标签</router-link>
      |
      <router-link to="/statistics">统计</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>