import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import(/* webpackChunkName: "about" */ './views/Dashboard.vue')
        },
        {
            path: '/dashboard/invoices',
            name: 'invoices',
            component: () => import(/* webpackChunkName: "about" */ './views/Invoices.vue'),
            props: true
        },
        {
            path: '/dashboard/products',
            name: 'products',
            component: () => import(/* webpackChunkName: "about" */ './views/Products.vue'),
            props: true
        },
        {
            path: '/dashboard/clients',
            name: 'clients',
            component: () => import(/* webpackChunkName: "about" */ './views/Clients.vue'),
            props: true
        },
        {
            path: '/dashboard/account',
            name: 'account',
            component: () => import(/* webpackChunkName: "about" */ './views/MyAccount.vue'),
            props: true
        },
        {
            path: '/dashboard/create-product',
            name: 'addProduct',
            component: () => import(/* webpackChunkName: "about" */ './views/viewsSingle/CreateProduct.vue'),
            props: true
        },
        {
            path: '/dashboard/edit-product',
            name: 'editProduct',
            component: () => import(/* webpackChunkName: "about" */ './views/viewsSingle/EditProduct.vue'),
            props: true
        },
        {
            path: '/dashboard/create-client',
            name: 'addClient',
            component: () => import(/* webpackChunkName: "about" */ './views/viewsSingle/CreateClient.vue'),
            props: true
        },
        {
            path: '/dashboard/edit-client',
            name: 'editClient',
            component: () => import(/* webpackChunkName: "about" */ './views/viewsSingle/EditClient.vue'),
            props: true
        },
        /* {
            path: '*',
            component: require('./views/404')
        } */
    ],
    mode: 'history'
})
