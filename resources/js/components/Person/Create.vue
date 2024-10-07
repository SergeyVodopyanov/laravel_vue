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
                :disabled="isDisabled"
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
import axios from "axios";
import { computed } from "vue";
import { ref } from "vue";

let name = ref(null);
let age = ref(null);
function store() {
    axios
        .post("/api/people", { name: name.value, age: age.value })
        .then((res) => {
            router.push({ name: "person.index" });
        });
}

const isDisabled = computed(() => {
    return !name.value || !age.value;
});

console.log(isDisabled);
</script>
