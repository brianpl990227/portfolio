<template>
    <div>
        <v-img src="/img/wave-up.svg" height="500" cover></v-img>
    </div>
    <div class="background-page">
        <v-container style="margin-top: -100px; position: relative;">
            <h1 class="white text-center">Skills</h1>
            <v-row>
                <v-col cols="12" sm="4">
                    <div class="d-flex align-items-center flex-direction-column">
                        <h2 class="margin-top-10 white">C#</h2>
                        <v-rating class="white" readonly v-model="rates.csharp" :item-labels="labels"
                            half-increments></v-rating>

                        <h2 class="margin-top-10 white">asp.net api</h2>
                        <v-rating class="white" readonly v-model="rates.api" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">asp.net mvc</h2>
                        <v-rating class="white" readonly v-model="rates.mvc" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">Entity Framework</h2>
                        <v-rating class="white" readonly v-model="rates.entity" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">Software Architecture</h2>
                        <v-rating class="white" readonly v-model="rates.architecture" :item-labels="labels"></v-rating>
                    </div>
                </v-col>

                <v-col cols="12" sm="4">
                    <div class="d-flex align-items-center flex-direction-column">
                        <h2 class="margin-top-10 white">SOLID Principles</h2>
                        <v-rating class="white" readonly v-model="rates.solid" :item-labels="labels"></v-rating>
                        
                        <h2 class="margin-top-10 white">Clean Architecture</h2>
                        <v-rating class="white" readonly v-model="rates.clean" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">Docker</h2>
                        <v-rating class="white" readonly v-model="rates.docker" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">PostgresSQL</h2>
                        <v-rating class="white" readonly v-model="rates.postgres" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">MySQL</h2>
                        <v-rating class="white" readonly v-model="rates.postgres" :item-labels="labels"></v-rating>

                    </div>
                </v-col>
                <v-col cols="12" sm="4">
                    <div class="d-flex align-items-center flex-direction-column">
                        <h2 class="margin-top-10 white">VueJs</h2>
                        <v-rating class="white" readonly v-model="rates.vue" :item-labels="labels"></v-rating>
                        
                        <h2 class="margin-top-10 white">ReactJs</h2>
                        <v-rating class="white" readonly v-model="rates.react" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">Blazor WebAssembly</h2>
                        <v-rating class="white" readonly v-model="rates.blazor" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">Git and Github</h2>
                        <v-rating class="white" readonly v-model="rates.git" :item-labels="labels"></v-rating>

                        <h2 class="margin-top-10 white">SCRUM</h2>
                        <v-rating class="white" readonly v-model="rates.scrum" :item-labels="labels"></v-rating>
                    </div>
                </v-col>
            </v-row>

        </v-container>
    </div>
    <div style="margin-top: -20px;">
        <v-img src="/img/wave.svg" height="500" cover></v-img>
    </div>
</template>

<script setup>
import { ref } from "vue";

const rates = ref({ csharp: 5, api: 5, mvc: 2, entity: 4, architecture: 4, solid: 4, clean: 5, docker:3, postgres: 4, mysql: 3, vue: 4, react: 1, blazor: 5, git:4, scrum: 5})
const labels = ref(['low', '', '', '', 'high'])

</script>