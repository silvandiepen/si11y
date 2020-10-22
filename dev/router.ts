// import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import Home from './views/Home.vue';

// const routes: Array<RouteRecordRaw> = [
// 	{
// 		path: '/',
// 		name: 'Home',
// 		component: Home
// 	},
// 	{
// 		path: '/buttons',
// 		name: 'Buttons',
// 		component: () =>
// 			import(/* webpackChunkName: "about" */ './views/Buttons.vue')
// 	},
// 	{
// 		path: '/contents',
// 		name: 'Contents',
// 		component: () =>
// 			import(/* webpackChunkName: "about" */ './views/Contents.vue')
// 	},
// 	{
// 		path: '/forms',
// 		name: 'Forms',
// 		component: () => import(/* webpackChunkName: "about" */ './views/Forms.vue')
// 	}
// ];

// const router = createRouter({
// 	history: createWebHistory(process.env.BASE_URL),
// 	routes
// });

// export default router;

import { createWebHistory, createRouter, RouteRecordRaw } from 'vue-router';
import {
	ButtonsView,
	ContentsView,
	FormsView,
	HomeView,
	NavigationView
} from './views';

const history = createWebHistory(process.env.BASE_URL);

const routes: Array<RouteRecordRaw> = [
	{ path: '/', component: HomeView },
	{ path: '/buttons', component: ButtonsView },
	{ path: '/contents', component: ContentsView },
	{ path: '/forms', component: FormsView },
	{ path: '/navigation', component: NavigationView }
];
const router = createRouter({ history, routes });
export default router;
