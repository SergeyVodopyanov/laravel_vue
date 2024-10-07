import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/people",
            component: () => import("./components/Person/Index.vue"),
            name: "person.index",
        },
    ],
});

export default router;
