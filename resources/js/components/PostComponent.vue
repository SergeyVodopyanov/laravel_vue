<template>
    <div>
        <CreateComponent />
        <IndexComponent />
    </div>
</template>

<script setup>
import IndexComponent from "./IndexComponent.vue";
import CreateComponent from "./CreateComponent.vue";

import { reactive, ref, computed, onMounted } from "vue";

let persons = null;
</script>
