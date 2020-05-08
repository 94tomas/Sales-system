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

// Vue select
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

// pagination
Vue.use(require('vue-resource'));

// print html to paper
import VueHtmlToPaper from 'vue-html-to-paper';
const options = {
    name: '_blank',
    specs: [
      'fullscreen=yes',
      'titlebar=yes',
      'scrollbars=yes'
    ],
    styles: [
      '/css/app.css'
    ]
}
Vue.use(VueHtmlToPaper, options);

// number format
import numeral from 'numeral';
import numFormat from 'vue-filter-number-format';
 
Vue.filter('numFormat', numFormat(numeral));

// writter number
// import writtenNumber from 'written-number';
Vue.use(require('written-number'));

// Generate code Qr fengyuanchen / vue-qrcode
import VueQrcode from '@chenfengyuan/vue-qrcode';
Vue.component(VueQrcode.name, VueQrcode);


Vue.component('app', require('./components/AppComponent.vue').default);
Vue.component('c-navigation', require('./partials/MainNav.vue').default);
Vue.component('c-sidebar', require('./partials/MainSidebar.vue').default);
Vue.component('c-footer', require('./partials/MainFooter.vue').default);
// list invoices
Vue.component('list-invoices', require('./views/viewsSingle/ListInvoices.vue').default);
Vue.component('pagination', require('laravel-vue-pagination'));
// Invoice
Vue.component('invoice', require('./views/viewsSingle/Invoice.vue').default);
/* Vue.component('dashboard', require('./views/Dashboard.vue').default);
Vue.component('invoice', require('./views/Invoice.vue').default);
Vue.component('product', require('./views/Product.vue').default); */

import router from './routes'

const app = new Vue({
    el: '#app',
    router
});
