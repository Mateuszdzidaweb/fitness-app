import {
    createRouter,
    createWebHistory
} from 'vue-router'
import Welcome from '../views/Welcome.vue'
// import firebase from 'firebase'
const routes = [{
        path: '/',
        name: 'Welcome',
        component: Welcome,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/home',
        name: 'Home',
        meta: {
            requiresAuth: true
        },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
    },
    {
        path: '/login',
        name: 'LogIn',
        component: () => import( /* webpackChunkName: "about" */ '../views/auth/LogIn.vue')
    },
    {
        path: '/register',
        name: 'Register',
        meta: {
            header_text: 'Sign Up to fitness app',
            title: 'Sign Up Page',
            description: 'This page is a Sing Up page for fitness app',
        },

        component: () => import( /* webpackChunkName: "about" */ '../views/auth/Register.vue')
    },
    {
        path: '/progress',
        name: 'Progres',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
            requiresAuth: true
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/Progress.vue')
    },
    {
        path: '/fitness',
        name: 'Fitness',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/Fitness.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/Settings.vue')
    },
    {
        path: '/photo-progress',
        name: 'Photo Progress',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: 'This page is a test page for learning about Vue CLI. Its subject is cats',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/progress/PhotoProgress.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router

// const openRoutes=['LogIn', 'Register'];
// // const closeRoutesForAuthenticated = ['LogIn', 'Register'];

// router.beforeEach((to, from, next) =>{
//     // const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//     const isAuthenticated = firebase.auth().currentUser
//     if(openRoutes.includes(to.name) ){
//         next();
//     }else if(isAuthenticated){
//         next();
//     }else {
//         next('/login');
//     }
// });






// router.beforeEach((to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
//     const isAuthenticated = firebase.auth().currentUser
//     if(isAuthenticated && to.path === '/') {
//       next('/home')
//     }
//     if (requiresAuth && !isAuthenticated) {
//       next('/login')
//     } else {
//       next()
//     }
//   }) 


// router.beforeEach(async (to, from, next) => {
//     const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//     if (requiresAuth && !await firebase.getCurrentUser()){
//       next('login');
//     }else{
//       next();
//     }
//   });