<template>
    <div>

        <Welcome></Welcome>
        <div v-if="fireworks" class="overflow-x-hidden">
            <div class="firework"></div>
            <div class="firework"></div>
            <div class="firework"></div>
        </div>



    </div>
    <!--Contenido de la pagina-->
    <div class="container mx-auto">
        <Profesional></Profesional>
        <Interest></Interest>
        <Skills></Skills>
        <Done></Done>
    </div>
    <Footer></Footer>


    <dialog id="my_modal_1" class="modal modal-bottom md:modal-middle">
        <div class="modal-box">
            <h3 class="font-bold text-lg">Welcome</h3>
            <p class="py-4">Hello, I see it's your first time here. I hope that here you can get an idea of what I can
                contribute. Take your time browsing and if you have any questions don't hesitate to contact me.</p>
            <div class="modal-action">
                <form method="dialog">
                    <!-- if there is a button in form, it will close the modal -->
                    <button @click="closeModal()" class="btn">Close</button>
                </form>
            </div>
        </div>
    </dialog>
</template>

<script setup>
import PhoneIcon from "@/components/icons/PhoneIcon.vue";
import MailIcon from "@/components/icons/MailIcon.vue";
import Axios from "axios";
import { SaveCommentUrl } from "@/helpers/UrlRequest";
import { } from "./";

const loading = ref(false)
const fireworks = ref(false)

onMounted(() => {
    const first = localStorage.getItem('FIRST')

    if (!first) {
        localStorage.setItem('FIRST', 1)
        document.getElementById('my_modal_1').showModal()
        fireworks.value = true
    }

})

const closeModal = () => {
    fireworks.value = false
}



</script>
<style>
@import url('/style.css');
</style>