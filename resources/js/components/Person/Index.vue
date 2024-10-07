<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Возраст</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in people" :key="person.id">
                    <th scope="row">{{ person.id }}</th>
                    <td>{{ person.name }}</td>
                    <td>{{ person.age }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

let people = ref([]);

getPeople();

async function getPeople() {
    axios.get("/api/people").then((res) => {
        people.value = res.data;
    });
}
</script>
