<template>
    <div class="w-25">
        <div class="mb-3">
            <input
                type="text"
                v-model="name"
                placeholder="Name"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <input
                type="number"
                v-model="age"
                placeholder="Age"
                class="form-control"
            />
        </div>
        <div class="mb-3">
            <input
                @click.prevent="updatePerson"
                type="submit"
                value="Update"
                class="btn btn-primary"
            />
        </div>
    </div>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios"; // Make sure to import axios

const route = useRoute();
const router = useRouter();

let name = ref(null);
let age = ref(null);

onMounted(() => {
    getPerson();
});

function getPerson() {
    axios.get(`/api/people/${route.params.id}`).then((res) => {
        name.value = res.data.data.name;
        age.value = res.data.data.age;
    });
}

function updatePerson() {
    axios
        .patch(`/api/people/${route.params.id}`, {
            name: name.value,
            age: age.value,
        })
        .then((res) => {
            router.push({
                name: "person.show",
                params: { id: route.params.id },
            });
        });
}
</script>
