<template>
    <div v-if="person">
        <div>Name: {{ person.name }}</div>
        <div>Age: {{ person.age }}</div>
    </div>
    <div>
        <router-link
            :to="{
                name: 'person.edit',
                params: { id: person.id },
            }"
            >Edit</router-link
        >
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

let person = ref({});

getPerson();

function getPerson() {
    axios.get("/api/people/" + route.params.id).then((res) => {
        person.value = res.data;
    });
}
</script>
