// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './layout'
import router from './router'

Vue.config.productionTip = false
    // 引入vuex
import store from './store'
// 引入url
import reqpath from '../config/urlconfig'
Vue.prototype.reqpath = reqpath;
// 引入jquery
import $ from 'jquery'
Vue.prototype.$ = $

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { Layout },
    template: '<Layout/>'
})