<template>
    <div><SinglePostComponent /></div>
    <h1>{{ name }}</h1>
    <h1>{{ job() }}</h1>
    <button class="btn btn-primary" @click="sayHello">Say Hello</button>

    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Имя</th>
                <th scope="col">Имя</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="person in persons" :key="person.id">
                <th scope="row">1</th>
                <td>{{ person.id }}</td>
                <td>{{ person.name }}</td>
                <td>{{ person.age }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import SinglePostComponent from "./SinglePostComponent.vue";
import { reactive, ref } from "vue";

let name = ref("Sergey");

let persons = ref([
    { name: "Sergey", age: 20 },
    { name: "Alex", age: 25 },
    { name: "Vlad", age: 30 },
]);

function sayHello() {
    alert("Hello, " + name.value);
}

function job() {
    return name.value + " работает программистом";
}
</script>
