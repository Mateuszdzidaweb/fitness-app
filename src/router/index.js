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
            description: '',
        },

        component: () => import( /* webpackChunkName: "about" */ '../views/auth/Register.vue')
    },
    {
        path: '/create-profile',
        name: 'Create Profile',
        meta: {
            header_text: 'Sign Up to fitness app',
            title: 'Sign Up Page',
            description: '',
        },

        component: () => import( /* webpackChunkName: "about" */ '../views/auth/CreateProfile.vue')
    },
    {
        path: '/progress',
        name: 'Progress',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
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
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/Fitness.vue')
    },
    {
        path: '/diet',
        name: 'Diet',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/Diet.vue')
    },
    {
        path: '/settings',
        name: 'Settings',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/Settings.vue')
    },
    {
        path: '/photo-progress',
        name: 'Photo Progress',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/progress/PhotoProgress.vue')
    },
    {
        path: '/weight-tracker',
        name: 'Weight Tracker',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/progress/WeightTracker.vue')
    },
    {
        path: '/body-tracker',
        name: 'Body Tracker',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/progress/BodyTracker.vue')
    },
    {
        path: '/calories-burner',
        name: 'Calories Burner',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/fitness/CaloriesBurner.vue')
    },
    {
        path: '/workout-sessions',
        name: 'Workout Sessions',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/fitness/WorkoutSessions.vue')
    },
    {
        path: '/workout-details/:id',
        name: 'Workout Details',
        props: true,
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/fitness/WorkoutDetails.vue')
    },
    {
        path: '/workout-details-cardio/:id',
        name: 'Workout Cardio',
        props: true,
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/fitness/WorkoutDetailsCardio.vue')
    },
    {
        path: '/food-tracker',
        name: 'Food Tracker',
        meta: {
            header_text: 'Sign Up to our cats',
            title: 'Sign Up Page',
            description: '',
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/diet/FoodTracker.vue')
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