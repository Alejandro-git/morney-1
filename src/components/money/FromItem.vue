<template>
  <label class="fromItem">
    <span class="name">{{this.fieldName}}</span>
    <input type="text" 
            :value="value" 
            @input="onValueChanged($event.target.value)"
           :placeholder="placeholder" />
    <!-- placeholder 占位符 -->
  </label>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Watch, Prop} from 'vue-property-decorator';

@Component
export default class FromItem extends Vue{
  @Prop({default: ''}) readonly value!: string;

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder?: string;

  // @Watch('value')
  // @Watch('value')可以删掉，因为 input 的值一旦被用户变化，就会触发 @update:value 事件，所以就没必要再加一个 watch 了。
  onValueChanged(value: string){
    this.$emit('update:value',value)
  }
}
</script>

<style lang="scss" scoped>
    .fromItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}

</style>
