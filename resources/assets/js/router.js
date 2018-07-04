import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter(
    {
        mode: 'history',
        routes: [
            { path: '/products/create', component: require('./components/products/products/form.vue') },
            { path: '/products/groups/create', component: require('./components/products/groups/form.vue') },
            { path: '/products/categories/create', component: require('./components/products/categories/form.vue') },
            { path: '/products/specifications/create', component: require('./components/products/specifications/form.vue') },
            { path: '/traders/create', component: require('./components/traders/form.vue') },
            { path: '/warehouse/create', component: require('./components/warehouse/form.vue') },
        ]
    }
);