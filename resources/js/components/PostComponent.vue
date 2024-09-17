<template>
    <div><SinglePostComponent /></div>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">Имя</th>
                <th scope="col">Возраст</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in personAgeLess30" :key="person.name">
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import SinglePostComponent from "./SinglePostComponent.vue";
import { reactive, ref, computed } from "vue";

let persons = reactive([
    { name: "Sergey", age: 20 },
    { name: "Alex", age: 25 },
    { name: "Vlad", age: 30 },
]);

const personAgeLess30 = computed(() => {
    return persons.filter((person) => person.age < 30);
});
</script>
