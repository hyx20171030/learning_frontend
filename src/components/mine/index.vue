<template>
  <div>
    <x-header :left-options="{showBack: false}">学习计划</x-header>
    <tab :line-width=1 bar-active-color="#FF8C00" active-color="#FF8C00">
      <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index" @on-item-click="toPage(index)">{{item}}</tab-item>
    </tab>
    <group>
      <tab :line-width=1 bar-active-color="green" active-color="green" custom-bar-width="60px">
        <tab-item :selected="demo5 === item" v-for="(item, index) in list5" @click="demo5 = item" :key="index" @on-item-click="toMyPage(index)">{{item}}</tab-item>
      </tab>
      <div v-if="planStatic === 1" v-for="(item,index) in list" :key="index" class="my-div">{{item.name}}<x-button class="txt-btn" style="float: right;margin: 15px 10px;" type="primary" :mini="true" action-type="button" @click.native="">修改</x-button></div>
      <div v-if="planStatic === 2" v-for="(item,index) in list" :key="index" class="my-div">{{item.instruction}}</div>
    </group>

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
        planStatic:1,
        demo4: '学习计划',
        demo5: '自拟',
        list4: ['学习计划', '学习足迹'],
        list5: ['自拟', '内部学习'],
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
      },
      //tab切换页面
      toPage(index){
        let that = this;
        switch (index) {
          case 1:
            that.$router.push({ path: '/mine/record'});
            break;
          // case 2:
          //   that.$router.push({ path: '/mine/flag'});
        }
      },
      //tab切换页面
      toMyPage(index){
        let that = this;
        switch (index) {
          case 0:
            that.planStatic = 1;
            break;
          case 1:
            that.planStatic = 2;
        }
      }
    }
  }
</script>
<style>
  .my-div{
    height: 60px;
    border-bottom: #e9e9e9 0.5px solid;
    text-align: center;
    line-height: 60px;
  }
</style>
