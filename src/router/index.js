import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: "/index.html",
            name: "DocAdmin",
            component: () => import(/* webpackChunkName: "DocAdmin" */ "../views/DocViewer"),
        },
        {
            path: "/DocViewer",
            name: "DocViewer",
            component: () => import(/* webpackChunkName: "DocViewer" */ "../views/DocViewer"),
        },
    ],
});

// const DEFAULT_TITLE = "DocManager";
// router.afterEach((to, from) => {
//     // Use next tick to handle router history correctly
//     // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
//     document.querySelector("#app").__vue__.$store.commit('setRoute', to);
//     document.querySelector("#app").__vue__.$store.commit('setRouteFrom', from);
//     Vue.nextTick(() => {
//         document.title = to.meta.title || DEFAULT_TITLE;
//     });
// });

export default router;