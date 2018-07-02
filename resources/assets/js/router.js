import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

export default new VueRouter(
    {
        mode: 'history',
        routes: [
            { path: '/products/create', component: require('./components/products/form.vue') }
        ]
    }
);