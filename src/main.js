// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'font-awesome/css/font-awesome.css'
import store from './store'

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueDPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';

import Vuex from 'vuex' //引入状态管理

Vue.use(Vuex) ;
 
Vue.use(VueDPlayer);

Vue.use(ElementUI);
Vue.component('icon', Icon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
  // render: h => h(App)
})
