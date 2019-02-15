<template>
  <div>
    <x-header>发布学习心得</x-header>
    <group>
      <x-input :placeholder="'标题'"></x-input>
      <x-textarea class="txt" name="description" :placeholder="'内容'"></x-textarea>
    </group>
    <x-button class="btn" type="primary" action-type="button">发布内容</x-button>
    <foot-tabs :value="footActive" :tabarr="tabarr" @change="footTabChange"></foot-tabs>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell,XTextarea } from 'vux';
  import FootTabs from '@/components/sharing/foot';

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      FootTabs,
      XTextarea
    },
    data() {
      return{
        footActive:1, // 控制底部菜单选中
        tabarr: [ // 底部菜单数据
          {txt: '学习库', val: 1, href: '/home'},
          {txt: '我要学习', val: 2, href: ''},
          {txt: '学习园地', val: 3, href: ''},
          {txt: '我的', val: 4, href: ''}
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
      footTabChange ( val ) {
        let that = this,
          item;
        that.footActive = val;
        // item = that.tabarr;
        that.tabarr.forEach((index,obj)=>{
          if ( obj.val === val ) {
            item = obj;
            return false;
          }
        });
        // that.$xljs.each(that.tabarr, (index, obj) => {
        //   if ( obj.val === val ) {
        //     item = obj;
        //     return false;
        //   }
        // });
        console.log("val: ",val)
      }
    }
  }
</script>
<style>
  .txt{
    height:400px;
  }
  .btn{
    margin-top:20px;
    width: 80%!important;
  }
</style>
