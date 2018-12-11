import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/pages/About'
import Portfolio from '../components/pages/Portfolio'
import Contact from '../components/pages/Contact'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: { name: 'About' }
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        }
    ]
})
