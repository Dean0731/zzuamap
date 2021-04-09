import VueRouter from 'vue-router';
import Vue from 'vue';
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter);

import SearchList from "../components/SearchList"
import SearchComplete from "../components/SearchComplete";
export const URL_SEARCH_LIST = "/searchList"
export const URL_SEARCH_COMPLETE = "/searchComplete"

const routes = [
    { path: URL_SEARCH_LIST, component: SearchList },
    { path: URL_SEARCH_COMPLETE, component: SearchComplete },
]
export default new VueRouter({
    routes
})

// const routes = [
//     { path:"/",redirect:URL_HOME},
//     { path: URL_HOME, component:Home,children:[
//             { path:"/",redirect:URL_DASHBOARD},
//             { path: URL_MESSAGE_LIST, component: MESSAGELIST },
//             { path: URL_MESSAGE_SEND, component: MESSAGSEND },
//             { path: URL_DASHBOARD, component: DASHBOARD },
//             {path:'*',component:Error404},
//         ]
//     },
//     { path: URL_LOGIN, component: Login },
//     {path:'*',component:Error404},
// ]