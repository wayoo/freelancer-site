import Vue from 'vue';
import App from './AppMobile.vue';

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount('#app');
