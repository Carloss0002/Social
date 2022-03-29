import Vue from 'vue'
import  Router  from 'vue-router'

import firebase from './services/firebaseConnection'

import Home from './pages/Home.vue'
import Login from './pages/Login.vue'
import Perfil from './pages/Perfil.vue'
import Dashboard from './pages/Dashboard.vue'


Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes:[
        {
            path: '/Login',
            component: Login
        },
        {
            path: '/',
            component: Home,
            meta:{
                requiresAuth: true
            }
           
        },
        {
          path: '/perfil/:userid', 
          component: Perfil,
          props: true,
          meta:{
            requiresAuth: true
        }
        },
        {
            path: '/dashboard',
            component: Dashboard,
            meta:{
                requiresAuth: true
            }
        },
       
    ]
})

router.beforeEach((to, from, next)=>{
    const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

    // requiresAuth true

    if(requiresAuth && !firebase.auth().currentUser){
        next('/login')
    }else{
        next()
    }
})

export default router