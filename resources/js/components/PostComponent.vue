<template>
    <div>
        <CreateComponent />
        <IndexComponent
            :parentVar="newNumber"
            :parentFunction="handleClick"
            ref="indexComponentRef"
        />
    </div>
</template>

<script setup>
import IndexComponent from "./IndexComponent.vue";
import CreateComponent from "./CreateComponent.vue";
import { ref, onMounted } from "vue";

// Ссылка на компонент IndexComponent
const indexComponentRef = ref(null);

function parentLog() {
    console.log("это родительский (PostComponent) лог");
}

// Вызов функции indexLog при монтировании компонента
onMounted(() => {
    if (indexComponentRef.value) {
        indexComponentRef.value.indexLog(); // Вызов функции indexLog
    }
    console.log(indexComponentRef.value.number);
});

const handleClick = () => {
    console.log("Кнопка была нажата в родительском компоненте!");
};

let newNumber = ref(5);
</script>
