<template>
  <div>
    <x-header>学习内容列表</x-header>
    <tab :line-width=1 bar-active-color="#FF8C00" active-color="#FF8C00">
      <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index" @on-item-click="toPage(index)">{{item}}</tab-item>
    </tab>
    <group v-for="(item,index) in list" :key="index">
      <div class="txt" >
        <p>
          {{item.name}}
        </p>
        <x-button class="txt-btn" type="primary" :mini="true" action-type="button" @click.native="">修改</x-button>
      </div>
    </group>
    <x-button class="add-btn" type="primary" action-type="button" @click.native="addFn">新增</x-button>
    <foot-tabs></foot-tabs>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell,Tab,TabItem } from 'vux';
  import FootTabs from '@/components/sharing/foot';

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      FootTabs,
      Tab,
      TabItem
    },
    data() {
      return{
        demo4:'内容列表',
        list4: ['方向建议',  '内容列表','自拟内容'],
        list: [
          {
            "id": 1,
            "name": "企业微信开发学习",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 1,
            "state": 1,
            "isSelect": false
          },
          {
            "id": 2,
            "name": "企业微信开发",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 2,
            "state": 1,
            "isSelect": false

          },
          {
            "id": 3,
            "name": "企业微信",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 3,
            "state": 1,
            "isSelect": false

          },
          {
            "id": 4,
            "name": "企业开发学习",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 4,
            "state": 1,
            "isSelect": false
          }
        ]
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
        that.footActive = 2;
        that.tabarr = [
          {txt: '投票', val: 0, href: '/home', icon: 'tp'},
          {txt: '搜索', val: 1, href: '', icon: 'ss', fn: that.sdailogSH},
          {txt: '排行榜', val: 2, href: '/home', icon: 'phb'},
          {txt: '我的投票', val: 3, href: '/home', icon: 'wdtp'}
        ];
      },
      addFn(){
        let that = this;
        that.$router.push({ path: '/home/add'});
      },
      //tab切换页面
      toPage(index){
        let that = this;
        switch (index) {
          case 0:
            that.$router.push({ path: '/home/suggest'});
            break;
          // case 1:
          //   that.$router.push({ path: '/home/list'});
          //   break;
          case 2:
            that.$router.push({ path: '/home/add'});
            break;
        }
      }
    }
  }
</script>
<style>
  .txt{
    padding: 5px;
    margin: 5px 0;
  }
  .txt p {
    float: left;
    width: 80%;
  }
  .txt-btn{
    height: 30px!important;
    width: 70px!important;
    border-radius: 5px!important;
    background-color: #6699CC!important;
    float: left;
    margin-bottom: 10px;
    vertical-align: middle!important;
  }
  .add-btn{
    height: 65px!important;
    width: 65px!important;
    border-radius: 32px!important;
    position: absolute;
    z-index: 999999;
    margin-top: 30%;
    right: 35%;
    bottom: -35%;
    /*background-color: #227700!important;*/
  }
</style>
