
import recordListModel from '@/models/recordListModel.ts';
import tagListModel from '@/models/tagListModel.ts';

const store = {

    // record store
    recordList: recordListModel.fetch(),
    createRecord: (record: RecordItem) => recordListModel.create(record),

    // 1、全局变量太多
    // 2、严重依赖 window

    // tag store
    tagList: tagListModel.fetch(),

    findTag: (id: string) => {
        return window.store.tagList.filter((t) => t.id === id)[0];
    },

    createTag: (name: string) => {
        const message = tagListModel.create(name);
        if (message === "duplicated") {
            window.alert("标签名重复");
        } else if (message === 'success') {
            window.alert('添加成功')
        }
    },

    removeTag: (id: string) => {
        return tagListModel.remove(id)
    },

    updateTag: (id: string, name: string) => {
        return tagListModel.update(id, name)

    }
};

export default store