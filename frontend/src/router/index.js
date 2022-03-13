import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		components: {
			default: Home,
		},
		meta: { auth: true },
		children: [
			{
				path: '/ssh',
				name: 'SSH',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/SSH.vue'),
			},
			{
				path: '/about',
				name: 'About',
				// route level code-splitting
				// this generates a separate chunk (about.[hash].js) for this route
				// which is lazy-loaded when the route is visited.
				component: () =>
					import(/* webpackChunkName: "about" */ '../views/About.vue'),
			},
		],
	},
	{
		path: '/auth',
		name: 'Auth',
		component: () => import('../views/Auth.vue'),
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

// const isLogin = false
router.beforeEach((to, from, next) => {
	// console.log('to.meta.auth: ', to.meta.auth)
	// if (to.meta.auth && !isLogin) {
	// next({ path: '/auth' })
	// }
	next()
})

export default router
