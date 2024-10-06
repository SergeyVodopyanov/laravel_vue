import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/posts",
            component: () => import("./components/PostComponent.vue"),
        },
        {
            path: "/tags",
            component: () => import("./components/TagComponent.vue"),
        },
    ],
});

export default router;
