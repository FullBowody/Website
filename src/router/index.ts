import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/',         name: 'Home',     component: HomeView,                                 beforeEnter: () => true },
        { path: '/download', name: 'Download', component: () => import("@/views/DownloadView.vue"), beforeEnter: () => true },
        { path: '/plugins',   name: 'Plugins',   component: () => import("@/views/PluginsView.vue"),   beforeEnter: () => true },

        // 404 redirect
        { path: "/:catchAll(.*)", name: 'NotFound', component: () => import("@/views/NotFound.vue") }
    ]
});

export default router;
