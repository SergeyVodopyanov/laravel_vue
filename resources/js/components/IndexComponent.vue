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
                <template v-for="person in people" :key="person.id">
                    <tr>
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>
                            <a
                                href="#"
                                class="btn btn-success"
                                @click.prevent="editPerson(person.id)"
                            >
                                Редактировать
                            </a>
                        </td>
                    </tr>
                    <tr :class="isEdit(person.id) ? '' : 'd-none'">
                        <th scope="row">{{ person.id }}</th>
                        <td><input type="text" class="form-control" /></td>
                        <td><input type="number" class="form-control" /></td>

                        <td>
                            <a
                                href="#"
                                class="btn btn-success"
                                @click.prevent="editPerson(null)"
                            >
                                Сохранить
                            </a>
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";

let people = ref([]);
let editPersonId = ref(null);
getPeople();

async function getPeople() {
    const response = await axios.get("/api/people");
    people.value = response.data;
}

function editPerson(id) {
    editPersonId.value = id;
}

function isEdit(id) {
    return editPersonId.value === id;
}
</script>
