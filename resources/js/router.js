import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/people",
            component: () => import("./components/Person/Index.vue"),
            name: "person.index",
        },
        {
            path: "/people/create",
            component: () => import("./components/Person/Create.vue"),
            name: "person.create",
        },
    ],
});

export default router;
