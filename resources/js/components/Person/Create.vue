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
                @click.prevent="store"
                type="submit"
                value="Add"
                class="btn btn-primary"
            />
        </div>
    </div>
</template>

<script setup>
import router from "../../router";
let name = null;
let age = null;
function store() {
    axios.post("/api/people", { name: name, age: age }).then((res) => {
        router.push({ name: "person.index" });
    });
}
</script>
