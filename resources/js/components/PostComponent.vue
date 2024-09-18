<template>
    <div class="">
        <CreateComponent />
        <SinglePostComponent />
    </div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Возраст</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in persons" :key="person.name">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import SinglePostComponent from "./SinglePostComponent.vue";
import CreateComponent from "./CreateComponent.vue";
import { reactive, ref, computed, onMounted } from "vue";

let persons = null;

/*
onMounted(() => {
    getPersons();
});

function getPersons() {
    axios
        .get("/people")
        .then((data) => {
            persons = data.data;
            console.log(persons);
        })
        .catch((error) => {})
        .finally(() => {});
}
        */
</script>
