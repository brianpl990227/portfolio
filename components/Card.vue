<template>
    <div class="card h-20 bg-base-100 shadow-xl image-full">
        <figure><img src="/img/logo.png" alt="Salas Transportation" title="Salas Transportation Services" /></figure>
        <div class="card-body ">
           <p class="text-center">{{ props.text }}</p>
       
        </div>
    </div>
</template>

<script setup>

const props = defineProps({
    text: String
})

</script>