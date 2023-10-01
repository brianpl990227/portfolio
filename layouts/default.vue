<template>
    <div data-theme="dark">
        <Header></Header>
        <main>
            <slot></slot>
        </main>
    </div>
</template>

<script setup>
import { onMounted } from "vue";





onMounted(() => {

})

useHead({
    titleTemplate: 'Brian Perez | Portfolio',

})

</script>