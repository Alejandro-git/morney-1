<template>
    <div>
        <div>
        当前页面不存在，请检查网址是否存在
        </div>
        <div>
            <router-link to="/">返回首页</router-link>
            |
            <a href="#/">返回首页</a>
            <!-- 两种方法都可以，router-link高级一点；
            尽量使用高级的 -->
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>