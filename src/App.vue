<template>
  <v-app>
    <v-main>
      <Header></Header>
      <Summary></Summary>
      <Skills></Skills>
      <Language></Language>
      <Work></Work>
      <Contact></Contact>
      <h1 class="text-center text-main-color margin-top-10" style="font-size: 60px; ">THANKS FOR WATCHING !!!</h1>
    </v-main>
  </v-app>
</template>

<script setup>
import Header from "./components/Header";
import Summary from "./components/Summary";
import Skills from "./components/Skills.vue";
import Language from "./components/Language.vue";
import Work from "./components/Work.vue";
import Contact from "./components/Contact.vue";

</script>

<style>
@import '../public/style.css';
</style>