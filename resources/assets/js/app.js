//
///**
// * First we will load all of this project's JavaScript dependencies which
// * includes Vue and other libraries. It is a great starting point when
// * building robust, powerful web applications using Vue and Laravel.
// *///

//require('./bootstrap');//

//window.Vue = require('vue');//

//import router from './router'//

///**
// * Next, we will create a fresh Vue application instance and attach it to
// * the page. Then, you may begin adding components to this application
// * or customize the JavaScript scaffolding to fit your unique needs.
// *///

//Vue.component('example-component', require('./components/ExampleComponent.vue'));//

//const app = new Vue({
//    router,
//	el: '#app',
//	render: h => h(require('./app.vue')),
//})

import Vue from 'vue'
import router from './router'
import http from './services/http.js'


Vue.component('header-bar', require('./components/header-bar.vue'))
Vue.component('footer-bar', require('./components/footer-bar.vue'))

const app = new Vue({
  router,
  el: '#app',
})
