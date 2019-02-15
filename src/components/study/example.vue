<template>
  <div>
    <x-header>{{title}}</x-header>
    <group>
      <p>{{content}}</p>
    </group>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux';
  import FootTabs from '@/components/sharing/foot';

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      FootTabs
    },
    data() {
      return{
        title:'标题',
        content:'内容'
      }
    },
    mounted(){
      let that = this;
      // 页面数据初始化
      that.pageInit();
    },
    methods: {
      pageInit(){
        let that = this;
        // let list = that.$route.params;
        let list = that.$route.query;
        console.log("that.$route",that.$route)
        list = JSON.parse(list.query);
        that.content = list.content;
        console.log("list:",list)

        // that.title = list.name;
      }
    }
  }
</script>
