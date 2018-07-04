import Vue from "vue";

import 'quasar-framework/dist/umd/quasar.mat.css';
import "quasar-extras/material-icons";
import "quasar-extras/fontawesome";
import "quasar-extras/mdi";
import "quasar-extras/ionicons";
import "quasar-extras/roboto-font";
import "quasar-extras/animate";

import Quasar, * as All from 'quasar-framework/dist/quasar.mat.esm';

Vue.use(Quasar, {
    components: All,
    directives: All,
    plugins: All,
    animations: All
});

// import App from './components/App.vue';
import router from './router.js';

Vue.component('app', require('./components/App.vue'));

const app = new Vue({
    el: '#app',
    data: {
    	theme_color: 'black',
    	layout: {
    		dir: 'ltr',
    		side_menu_float: 'left'
    	}
    },
    router
});
