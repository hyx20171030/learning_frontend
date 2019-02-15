<template>
  <div>
    <x-header class="header" :left-options="{showBack: false}">学习库</x-header>
    <pull-to :top-load-method="refresh" :bottom-load-method="loadMore">
    <div :style="'overflow-y:auto!important;height:'+clientHeight+'px'">
      <group v-for="(item,index) in list" :key="item.id" >
        <cell
          is-link
          value-align="left"
          :title="(item.title)"
          :border-intent="false"
          :arrow-direction="item.isSelect ? 'up' : 'down'"
          @click.native="mytest(index)"></cell>
        <cell v-if="item.isSelect" class="btn-content">
          <p style="float: left"></p>
          <x-button class="btn1" type="primary" action-type="button" @click.native="showPlugin3(item.id)">加入计划</x-button>
          <x-button class="btn2" type="primary" action-type="button" @click.native="cellClick(item)">立即学习</x-button>
        </cell>
        <!--<cell is-link value-align="left" v-for="(item,index) in list" :title="(item.name)" :key="item.id" @click.native="cellClick(item)">-->
        <!--</cell>-->
      </group>
      <!--<div v-transfer-dom>-->
      <toast v-model="showPositionValue" type="text" :time="800" is-show-mask text="加入计划成功！" :position="position"></toast>
      <!--</div>-->
    </div>
    </pull-to>
    <foot-tabs></foot-tabs>
  </div>

</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell ,CellBox,Scroller,Confirm,Toast } from 'vux';
  import FootTabs from '@/components/sharing/foot';
  import PullTo from 'vue-pull-to';
  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell,
      CellBox,
      FootTabs,
      Scroller,
      PullTo,
      Confirm,
      Toast
    },
    data() {
      return{
        clientHeight:567,
        show: false,
        show5:false,
        position: 'default',
        showPositionValue: false,
        list: [
          {
            "id": 1,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          },
          {
            "id": 2,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          },
          {
            "id": 3,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
      }, {
            "id": 4,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }, {
            "id": 5,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }, {
            "id": 6,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }, {
            "id": 7,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }, {
            "id": 8,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }, {
            "id": 9,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }, {
            "id": 10,
            "direction_id": 0,
            "type_id": 0,
            "title": "这是标题",
            "content": "这是内容",
            "time_start": 0,
            "time_end": 0,
            "state": 1,
            "user_id": 1,
            "is_public": 1,
            "targets": " ",
            "url": " ",
            "annex": " ",
            "isSelect": false
          }
        ],
        page:{
          counter:1,
          pageStart:1,
          pageEnd:1,
          total:10
        }
      }
    },
    created(){
    },
    mounted(){
      // 页面数据初始化
      this.pageInit();
      this.getUserInfo();
      this.getLearnContent();
    },
    methods: {
      pageInit(){
        let that = this;
        that.showTmpName = 'showContent001';
        let dataList = ({list,index,limit}) => {
          return list.filter((v,i)=>index<i&&index+limit>i)
        }
        that.clientHeight = document.body.clientHeight - 100;
      },
      //获取用户信息
      getUserInfo(){
        let that = this;
        let params = {openid:123456789};
        that.$http.post('http://learning.yzj.fangwuyi.com/api/Index/getUser',params).then(({data}) => {
          console.log(data)
        })
      },
      //获取学习内容
      getLearnContent(){
        let that = this;
        let param2 = {user_id:1};
        that.$http.post('http://learning.yzj.fangwuyi.com/index.php/api/index/getContent',param2).then(({data}) => {
          console.log(JSON.stringify(data.data.contentlist));
          // that.list = data.data.directionlist;
        })
      },
      //加入学习计划
      addStudyPlan(datetime,id){
        let that = this;
        let myDate = new Date();
        let year = myDate.getFullYear();
        let month = myDate.getMonth();
        let day = myDate.getDate();
        let starttime = year+"-"+month+"-"+day;
        console.log("starttime ",starttime);
        let param = {user_id:1,time_start:starttime,time_end:datetime,content_id:id,"is_my":1};
        that.$http.post('http://learning.yzj.fangwuyi.com/index.php/api/index/addPlan',param).then(({data}) => {
          console.log(JSON.stringify(data));
          if(data.errcode===0){
            that.showPosition('');
          }
          // that.list = data.data.directionlist;
        })
      },
      //学习内容详情页
      cellClick(val){
        console.log("item",val);
        let data =JSON.stringify(val)
        let arr = [];
        arr.push(val);
        let that = this;
        that.$router.push({ path: '/study/example?query='+data});
      },
      mytest(index){
          this.list[index].isSelect = !this.list[index].isSelect;
      },
      //上拉加载
      refresh(loaded) {
        // fetchDataList()
        //   .then((res) => {
        //     this.dataList = res.data.dataList
        //     loaded('done')
        //   })
        loaded('done');
      },
      //下拉刷新
      loadMore(loaded){
        loaded('done');
      },
      showPlugin3 (id) {
        const _this = this
        this.$vux.confirm.prompt('123', {
          title: '请输入学习计划结束时间（如：2019-1-1）',
          onShow () {
            console.log('promt show')
            _this.$vux.confirm.setInputValue('2019-1-1');
          },
          onHide () {
            console.log('prompt hide')
          },
          onCancel () {
            console.log('prompt cancel')
          },
          onConfirm (msg) {
            _this.addStudyPlan(msg,id);
          }
        })
      },
      showPosition (position) {
        this.position = position;
        this.showPositionValue = true
      },
    }
  }
</script>
<style lang="less" scoped>
  .sub-item {
    color: #888;
  }
  .slide {
    padding: 0 20px;
    overflow: hidden;
    max-height: 0;
    transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
  }
  .animate {
          max-height: 9999px;
          transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
          transition-delay: 0s;
  }
  .btn-content{
    /*text-align: left;*/
  }
  .btn-content p{
    text-align: left;
    margin-bottom: 10px;
  }
  .btn2{
    width: 100px;
    float: left;
    margin: 0px 35px 5px 0px!important;
    background-color: #99CC66;
  }
  .btn1{
    width: 100px;
    float: left;
    margin: 0px 35px 5px 55px!important;
    background-color: #99CCFF;
  }
  .header{
    z-index: 9999;
  }
</style>
