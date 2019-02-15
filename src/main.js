// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { AjaxPlugin } from 'vux'
import { XHeader } from 'vux'
import { XButton,XInput,XTextarea} from 'vux'
import { ConfirmPlugin } from 'vux'

import { LoadingPlugin, ToastPlugin, AlertPlugin,Tabbar, TabbarItem } from 'vux'
import '@/assets/iconfont/iconfont.css'
import './assets/style.css'
Vue.config.productionTip = false;


/* eslint-disable no-new */
Vue.use(LoadingPlugin);
Vue.use(ToastPlugin);
Vue.use(AlertPlugin);
Vue.use(AjaxPlugin);
Vue.use(ConfirmPlugin);
Vue.component('x-button', XButton);
Vue.component('x-header', XHeader);
Vue.component('x-input', XInput);
Vue.component('x-textarea', XTextarea);
Vue.component('tabbar', Tabbar);
Vue.component('tabbar-item', TabbarItem);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
