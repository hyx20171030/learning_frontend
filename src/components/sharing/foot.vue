<template>
  <div style="margin-bottom: 0!important">
    <!--<button @click="click">{{$route.name}}</button>-->
    <tabbar :value="value" @change="footTabChange" v-model="index" style="margin-bottom: 0!important">
      <tabbar-item :selected="$route.name === 'study'"  link="/study">
        <!--<img slot="icon" src="../assets/icon/ico_nav_button.png">-->
        <i slot="icon" class="iconfont icon-read"></i>
        <span slot="label">学习库</span>
      </tabbar-item>
      <tabbar-item :selected="$route.name === 'home'" link="/home" >
        <i slot="icon" class="iconfont icon-appstore"></i>
        <span slot="label">我要学习</span>
      </tabbar-item>
      <tabbar-item :selected="$route.name === 'plot'" link="/plot">
        <i slot="icon" class="iconfont icon-gengduo"></i>
        <span slot="label">学习园地</span>
      </tabbar-item>
      <tabbar-item :selected="$route.name === 'mine'" link="/mine" badge="2">
        <i slot="icon" class="iconfont icon-jingyingguanli"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
    <!--<button v-for="(item,index) in tabarr" @click="footTabChange">{{index}}</button>-->
    <!--<tabbar :value="value" @on-index-change="footTabChange">-->
      <!--<tabbar-item v-for="(item,index) in tabarr" v-model="index" >-->
        <!--<i slot="icon" class="'iconfont icon-'+item.icon"></i>-->
        <!--<span slot="label" label="item.val"></span>-->
      <!--</tabbar-item>-->
    <!--</tabbar>-->
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'
  import Tab from "vux/src/components/tab/tab";
  export default {
    components: {
      Tab,
      Tabbar,
      TabbarItem,
      Group,
      Cell
    },
    props: {
      value: {
        type:Number,
        default: 0
      },
      change: {
        type: Function,
        default () {}
      }
    },
    data () {
      return {
        index:0
      }
    },
    created () {
      // 页面数据初始化
      this.pageInit()
    },
    methods: {
      // 页面数据并发请求
      pageInit () {

      },
      footTabChange ( val ) {
        // console.log("value: ",tabarr);
        this.$emit('change', val)
      },
      click(){
        alert("ggggg")
      }
    }
  }
</script>

