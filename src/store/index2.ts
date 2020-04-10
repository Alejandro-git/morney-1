
import recordStore from '@/store/recordStore.ts';
import tagStore from '@/store/tagStore.ts';

const store = {
    ...recordStore,
    ...tagStore
    // 1、全局变量太多
    // 2、严重依赖 window   
};

export default store