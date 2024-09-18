<template>
    <div class="w-25">
        <div class="mb-3">
            <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Имя"
                v-model="name"
            />
        </div>
        <div class="mb-3">
            <input
                type="number"
                class="form-control"
                id="age"
                placeholder="Возраст"
                v-model="age"
            />
        </div>
        <div class="mb-3">
            <button @click.prevent="addPerson" class="btn btn-primary">
                Добавить
            </button>
        </div>
    </div>
</template>

<script setup>
let name = null;
let age = null;
function addPerson() {
    axios
        .post("/api/people", {
            name: name,
            age: age,
        })
        .then((res) => {
            name = null;
            age = null;
            console.log(res);
        });
}
</script>
