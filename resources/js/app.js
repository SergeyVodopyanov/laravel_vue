import { createApp } from "vue";

import ExampleComponent from "./components/ExampleComponent.vue";
import PostComponent from "./components/PostComponent.vue";
import "./bootstrap";

const app = createApp({
    components: {
        ExampleComponent,
        PostComponent,
    },
});

app.mount("#app");
