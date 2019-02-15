<template>
  <div class="page-body">
    <div class="content-body">
      <group>
      </group>
      <foot-tabs></foot-tabs>
    </div>
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
        // that.$router.push({ path: '/study/index'});
      }
    }
  }
</script>
