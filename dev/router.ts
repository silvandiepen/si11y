import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/buttons',
		name: 'Buttons',
		component: () =>
			import(/* webpackChunkName: "about" */ './views/Buttons.vue')
	},
	{
		path: '/contents',
		name: 'Contents',
		component: () =>
			import(/* webpackChunkName: "about" */ './views/Contents.vue')
	},
	{
		path: '/forms',
		name: 'Forms',
		component: () => import(/* webpackChunkName: "about" */ './views/Forms.vue')
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
