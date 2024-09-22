<template>
    <div>
        <CreateComponent />
        <IndexComponent ref="indexComponentRef" />
    </div>
</template>

<script setup>
import IndexComponent from "./IndexComponent.vue";
import CreateComponent from "./CreateComponent.vue";
import { ref, onMounted } from "vue";

// Ссылка на компонент IndexComponent
const indexComponentRef = ref(null);

// Вызов функции indexLog при монтировании компонента
onMounted(() => {
    if (indexComponentRef.value) {
        indexComponentRef.value.indexLog(); // Вызов функции indexLog
    }
});
</script>
