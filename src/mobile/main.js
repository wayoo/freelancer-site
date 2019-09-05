import Vue from 'vue';
import mandMobile from 'mand-mobile';
import 'mand-mobile/lib/mand-mobile.css';


import router from './router';
import App from './AppMobile.vue';


Vue.use(mandMobile);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
