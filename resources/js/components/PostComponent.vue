<template>
    <div><SinglePostComponent /></div>
    <div>228228228228228228228228228228228228228228228</div>
    <h1>{{ name }}</h1>
</template>

<script setup>
import SinglePostComponent from "./SinglePostComponent.vue";
import { ref } from "vue";

/*
export default {
    components: { SinglePostComponent },
    name: "PostComponent",
};
*/

let name = ref("Sergey");
</script>
