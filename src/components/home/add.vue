<template>
  <div>
    <x-header>自拟内容</x-header>
    <tab :line-width=1 bar-active-color="#FF8C00" active-color="#FF8C00">
      <tab-item :selected="demo4 === item" v-for="(item, index) in list4" @click="demo4 = item" :key="index" @on-item-click="toPage(index)">{{item}}</tab-item>
    </tab>
    <group>
      <popup-picker title="所属习方向" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <popup-picker title="所属学习类型" :data="list1" v-model="value1" @on-show="onShow" @on-hide="onHide" @on-change="onChange"></popup-picker>
      <x-input title="学习主题" placeholder="必填" v-model="value3"></x-input>
      <x-textarea title="学习主内容说明" placeholder="请填写学习主内容说明" :show-counter="false" :rows="3"></x-textarea>
      <x-textarea title="学习主内容说明" placeholder="请填写学习主内容说明" :show-counter="false" :rows="3"></x-textarea>
      <datetime title="计划开始时间" v-model="time1" value-text-align="center"></datetime>
      <datetime title="计划结束时间" v-model="time1" value-text-align="center"></datetime>
    </group>
    <x-button class="add-btn1" type="primary" action-type="button" @click.native="">提交</x-button>
    <foot-tabs></foot-tabs>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell,Tab,TabItem,Selector,PopupPicker,Datetime} from 'vux';
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
      Selector,
      PopupPicker,
      Datetime
    },
    data() {
      return{
        time1: '2019-02-13',
        value3: '',
        value7: '',
        value5: ['A'],
        dataList: [['A', 'B', 'C']],
        value1: ['iPhone'],
        list1: [['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']],
        demo4:'自拟内容',
        list4: ['方向建议','内容列表' , '自拟内容'],
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
      //tab切换页面
      toPage(index){
        let that = this;
        switch (index) {
          case 0:
            that.$router.push({ path: '/home/suggest'});
            break;
          case 1:
            that.$router.push({ path: '/home/list'});
            break;
          // case 2:
          //   that.$router.push({ path: '/home/add'});
          //   break;
        }
      },
      onChange (val) {
        console.log('val change', val)
      },
      onShow () {
        console.log('on show')
      },
      onHide (type) {
        console.log('on hide', type)
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
  .add-btn1{
    margin-top: 30px;
    width: 260px!important;
    /*background-color: #227700!important;*/
  }
</style>
