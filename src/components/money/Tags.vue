<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tags"
};
</script>

<style lang="scss" scoped>
.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  > .current {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    > li {
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      line-height: $h;
      // 只有一行的时候可以使用height=line-height，来居中
      // 多行的时候使用flex
      border-radius: $h/2;
      // border-radius:是设置高度，这里要设置宽度
      // 实际微调
      padding: 0 16px;
      margin-right: 12px;
      margin-top: 4px;
    }
  }
  > .new {
    padding-top: 16px;
    button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 4px;
    }
  }
}
</style>
