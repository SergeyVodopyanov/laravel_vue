<template>
    <div>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Возраст</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="person in people" :key="person.id">
                    <th scope="row">{{ person.id }}</th>
                    <td>
                        <router-link
                            :to="{
                                name: 'person.show',
                                params: { id: person.id },
                            }"
                            >{{ person.name }}</router-link
                        >
                    </td>
                    <td>{{ person.age }}</td>
                    <td>
                        <router-link
                            :to="{
                                name: 'person.edit',
                                params: { id: person.id },
                            }"
                            >Edit</router-link
                        >
                    </td>
                    <td>
                        <a
                            @click.prevent="deletePerson(person.id)"
                            href="#"
                            class="btn btn-outline-danger"
                            >Delete</a
                        >
                    </td>
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
        people.value = res.data.data;
    });
}

function deletePerson(id) {
    axios.delete(`/api/people/${id}`).then((res) => {
        getPeople();
    });
}
</script>
