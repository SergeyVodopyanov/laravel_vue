<template>
    <div><SinglePostComponent /></div>
    <div>228228228228228228228228228228228228228228228</div>
    <h1>{{ name }}</h1>
    <h1>{{ job() }}</h1>
    <button @click="sayHello">Say Hello</button>
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

function sayHello() {
    alert("Hello, " + name.value);
}

function job() {
    return name.value + " работает программистом";
}
</script>
