/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */



import BootstrapVue from 'bootstrap-vue' //Importing

Vue.use(BootstrapVue)



Vue.component('app', require('./components/AppComponent.vue').default);
Vue.component('c-navigation', require('./partials/MainNav.vue').default);
Vue.component('c-sidebar', require('./partials/MainSidebar.vue').default);
Vue.component('c-footer', require('./partials/MainFooter.vue').default);
/* Vue.component('dashboard', require('./views/Dashboard.vue').default);
Vue.component('invoice', require('./views/Invoice.vue').default);
Vue.component('product', require('./views/Product.vue').default); */

import router from './routes'

const app = new Vue({
    el: '#app',
    router
});
