import Vue from 'vue';
import Router from 'vue-router';
import config from '../config';

console.log(`${process.env.BASE_URL}${config.routerPrefix.mobile}`);
Vue.use(Router);

const router = new Router({
    // mode: 'history',
    base: `${process.env.BASE_URL}${config.routerPrefix.mobile}`,
    routes: [
        {
            path: '/',
            component: () => import('./views/index.vue'),
        },
        {
            path: '*',
            name: 'error_404',
            component: () => import('./views/404.vue'),
        },
    ],
});


export default router;
