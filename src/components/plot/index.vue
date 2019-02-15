<template>
  <div class="container">
    <x-header :left-options="{showBack: false}">学习园地</x-header>
    <!--<group>-->
    <x-button class="putTalk" type="primary" action-type="button" @click.native="talkThing">发布</x-button>
    <div class="content">
    <p class="talk" v-for="(item,index) in list" :title="item.name" :key="index"><a href="">{{item.name}}</a></p>
    </div>
    <!--</group>-->
    <foot-tabs></foot-tabs>
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
        list: [
          {
            "id": 1,
            "name": "企业微信开发学习",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 1,
            "state": 1
          },
          {
            "id": 2,
            "name": "企业微信开发",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 2,
            "state": 1
          },
          {
            "id": 3,
            "name": "企业微信",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 3,
            "state": 1
          },
          {
            "id": 4,
            "name": "企业开发学习",
            "instruction": "对企业微信二次开发让办公更加个性化",
            "sort": 4,
            "state": 1
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
      talkThing(){
        let that = this;
        that.$router.push({ path: '/plot/putTalk'});
      }
    }
  }
</script>
<style>
  .container{
    /*background-color: #fff;*/
    height: 100%;
  }
  .talk {
    margin: 10px 0;
    padding:5px 10px;
    border-top: #e9e9e9 1px solid;
    border-bottom: #e9e9e9 1px solid;
    text-align: left;
    background-color: #fff;
  }
  .talk a{
    color: #000;
  }
  .putTalk{
    height: 65px!important;
    width: 65px!important;
    border-radius: 32px!important;
    position: absolute;
    z-index: 999999;
    margin-top: 120%;
    left: 35%;
    background-color: #6699CC!important;
  }
</style>
