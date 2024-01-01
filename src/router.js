import { createRouter, createWebHistory } from 'vue-router';
import Signup from './pages/Signup.vue';
import Log from './pages/Log.vue';
import Task from './pages/Task.vue';
import Home from './pages/Home.vue';
import AddTask from './pages/AddTask.vue';
import DeleteTask from './pages/DeleteTask.vue';
// import { IS_USER_AUTHENTICATE_GETTER } from './store/StoreConstants';
// import store from './store/store';

const routes =[
    {path: '/', component: Home},
    {path: '/login', component: Log, meta: { auth:false }},
    {path: '/signup', component: Signup, meta: { auth:false }},
    {path: '/tasks', component: Task, meta: { auth:true }},
    {path: '/add', component: AddTask, meta: { auth:true }},
    {path: '/delete', component: DeleteTask, meta: { auth:true }},

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
// was trying for limiting user to show unwanted pages if not authorized
// router.beforeEach((to, from, next) => {
//     if('auth' in to.meta && to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]) {
//         next('/login');
//     } else if ('auth' in to.meta && !to.meta.auth && store.getters[`auth/${IS_USER_AUTHENTICATE_GETTER}`]) {
//         next('/tasks');
//     } else {
//         next();
//     }
// })

export default router;