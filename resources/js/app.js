import { createApp } from "vue";

import PostComponent from "./components/PostComponent.vue";
import "./bootstrap";

const app = createApp({
    components: {
        PostComponent,
    },
});

app.mount("#app");
