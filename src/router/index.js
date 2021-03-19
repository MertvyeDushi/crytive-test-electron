import Vue from 'vue'
import VueRouter from 'vue-router'

import MainView from '@/views/MainView'
import AboutView from '@/views/AboutView'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'MainView',
		component: MainView
	},
	{
		path: '/about',
		name: 'AboutView',
		component: AboutView
	},
	{
		path: '*',
		redirect: '/'
	}
]

const router = new VueRouter({
	mode: process.env.IS_ELECTRON ? 'hash' : 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
