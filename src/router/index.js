import Vue from 'vue'
import Router from 'vue-router'
import About from '../components/pages/About'
import Portfolio from '../components/pages/Portfolio'
import Contact from '../components/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: About
    },
    {
      path: '/about',
      name: 'About me',
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
