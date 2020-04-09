<template>
  <div>
    <Layout class-prefix="layout">

      <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>

      <Types :value.sync="record.type" />

      <Notes @update:value="onUpdateNotes" />

      <Tags :data-source.sync="tags" @update:value="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import NumberPad from "@/components/Money/NumberPad.vue";
import Types from "@/components/Money/Types.vue";
import Notes from "@/components/Money/Notes.vue";
import Tags from "@/components/Money/Tags.vue";
import { Component, Watch, Model } from "vue-property-decorator";
import recordListModel from '@/models/recordListModel';
import tagListModel from '@/models/tagListModel';

const recordList = recordListModel.fetch();
const tsgList = tagListModel.fetch();




@Component({
  components: { NumberPad, Types, Notes, Tags }
})
export default class Money extends Vue {
  tags = tsgList;

  recordList: RecordItem[] = JSON.parse(window.localStorage.getItem('recordList') || '[]');

  record: RecordItem = { tags: [], notes: '', type: '-', amount: 0 };

  onUpdateTags(value: string[]) {
    this.record.tags = value
  }
  onUpdateNotes(value: string) {
    this.record.notes = value
  }
  
  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value)
  }

  saveRecord(){
    const record2: RecordItem = JSON.parse(JSON.stringify(this.record))
    record2.createdAt = new Date();
    this.recordList.push(record2);
    
  }

  @Watch('recordList')
  onRecordChange(){
    recordListModel.save(this.recordList)
  }
}
</script>

<style lang="scss">
.layout-content {
  //   border: 3px solid red;
  display: flex;
  flex-direction: column-reverse;
}
</style>
