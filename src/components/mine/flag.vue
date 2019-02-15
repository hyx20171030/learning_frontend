<template>
  <div>
    <x-header>我的flag</x-header>
    <tab :line-width=1 bar-active-color="#FF8C00" active-color="#FF8C00">
      <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index" @on-item-click="toPage(index)">{{item}}</tab-item>
    </tab>
    <group>
      <group-title slot="title">2019-02-14</group-title>
      <checklist :label-position="labelPosition" required :options="commonList" v-model="checklist001"></checklist>
    </group>
    <foot-tabs></foot-tabs>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell,Tab,TabItem,Checklist,GroupTitle  } from 'vux';
  import FootTabs from '@/components/sharing/foot';

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      FootTabs,
      Tab,
      TabItem,
      Checklist,
      GroupTitle
    },
    data() {
      return{
        demo4: '我的flag',
        list4: ['学习计划', '学习足迹', '我的flag'],
        commonList: [ '学习vue', '学习php', '学习python' ],
        checklist001: [],
        labelPosition: ''
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
      },
      toPage(index){
        let that = this;
        switch (index) {
          case 0:
            that.$router.push({ path: '/mine'});
            break;
          case 1:
            that.$router.push({ path: '/mine/record'});
            break;
          case 2:
            that.$router.push({ path: '/mine/flag'});
        }
      }
    }
  }
</script>
