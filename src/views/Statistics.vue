<template>
<div> 
    <Layout>
        <p>Statistics.vue</p>
    </Layout>
</div> 
</template>

<script>
    export default {
        name: 'Statistics',
        
    }
</script>

<style lang="scss" scoped>
     .nav-wrapper{
        display: flex;
        border: 1px solid green;
        flex-direction: column;
        // min-height: 100vh;//最小高度100vh，也就是沾满可视高度
        // 考虑如果内容太多导航栏会出现在更下面，所以固定高度更合适height: 100vh；
        height: 100vh;
    }
    .content{
        border: 1px solid blue;
        overflow:auto;
        //内容太多的话同样会让导航栏看不见，
        //  overflow:auto;让内容可以滚动，展示滚动条。
        // 就是蓝色边框里面的内容可以滚动；
        flex-grow: 1;
        // 尽量把高度都给content
    }
</style>