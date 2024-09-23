<template>
    <div>
        <!-- <slot></slot> -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Имя</th>
                    <th scope="col">Возраст</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>

            <tbody>
                <template v-for="person in people" :key="person.id">
                    <tr :class="isEdit(person.id) ? 'd-none' : ''">
                        <th scope="row">{{ person.id }}</th>
                        <td>{{ person.name }}</td>
                        <td>{{ person.age }}</td>
                        <td>
                            <a
                                href="#"
                                class="btn btn-success"
                                @click.prevent="
                                    editPerson(
                                        person.id,
                                        person.name,
                                        person.age
                                    )
                                "
                            >
                                Редактировать
                            </a>
                        </td>
                        <td>
                            <a
                                href="#"
                                class="btn btn-danger"
                                @click.prevent="deletePerson(person.id)"
                                >Удалить
                            </a>
                        </td>
                    </tr>
                    <tr :class="isEdit(person.id) ? '' : 'd-none'">
                        <th scope="row">{{ person.id }}</th>
                        <td>
                            <input
                                type="text"
                                v-model="name"
                                class="form-control"
                            />
                        </td>
                        <td>
                            <input
                                type="number"
                                v-model="age"
                                class="form-control"
                            />
                        </td>

                        <td>
                            <a
                                href="#"
                                class="btn btn-success"
                                @click.prevent="updatePerson(person.id)"
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
import { ref, defineExpose } from "vue";

let people = ref([]);
getPeople();

let editPersonId = ref(null);
let name = ref(null);
let age = ref(null);

async function getPeople() {
    const response = await axios.get("/api/people");
    people.value = response.data;
}

function editPerson(id, oldName, oldAge) {
    editPersonId.value = id;
    name.value = oldName;
    age.value = oldAge;
}

function updatePerson(id) {
    editPersonId.value = null;
    console.log(name.value, age.value);

    axios
        .patch(`/api/people/${id}`, { name: name.value, age: age.value })
        .then((res) => {
            console.log(res);
            getPeople();
        });
}

function deletePerson(id) {
    axios.delete(`/api/people/${id}`).then((res) => {
        getPeople();
    });
}

function isEdit(id) {
    return editPersonId.value === id;
}

function indexLog() {
    console.log("это индекс лог");
}

let number = ref(8);

defineExpose({
    indexLog,
    number,
});
</script>
