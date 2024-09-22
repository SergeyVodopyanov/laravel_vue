<template>
    <div>
        <CreateComponent />
        <IndexComponent ref="indexComponentRef" />
        <button @click="callIndexLog">Вызвать indexLog</button>
    </div>
</template>

<script setup>
import IndexComponent from "./IndexComponent.vue";
import CreateComponent from "./CreateComponent.vue";
import { ref } from "vue";

// Ссылка на компонент IndexComponent
const indexComponentRef = ref(null);

// Функция для вызова indexLog из IndexComponent
function callIndexLog() {
    if (indexComponentRef.value) {
        indexComponentRef.value.indexLog(); // Вызов функции indexLog
    }
}
</script>
