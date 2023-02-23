<template>
    <div>
        <v-img src="/img/wave-up.svg" height="500" cover></v-img>
    </div>
    <div class="background-page">
        <v-container style="margin-top: -100px; position: relative;">
            <v-timeline align="start">
                <v-timeline-item size="small" dot-color="teal">
                    <template v-slot:opposite>
                        <div :class="`pt-1 headline font-weight-bold text-red`" v-text="'December 2021 - October 2022'">
                        </div>
                    </template>
                    <div>
                        <h3 class="text-white">Centro de Informática Médica (CESIM) - La Habana, Cuba</h3>
                        <h4 class="text-white">Frontend developer in BrainsSys Cluster project:</h4>
                        <ul>
                            <li class="text-white">Visual interface design</li>
                            <li class="text-white">Implementation of the web client using Vue.js</li>
                            <li class="text-white">Implementing web client security using Json Web Token</li>
                            <li class="text-white">Consuming services offered by the project backend</li>
                            <li class="text-white">Implementation of websocket to display information in realtime</li>
                        </ul>
                        <p class="text-white margin-top-10">Reference contact: aorellana@uci.cu</p>
                    </div>
                </v-timeline-item>
                <v-timeline-item size="small" dot-color="teal">
                    <template v-slot:opposite>
                        <div :class="`pt-1 headline font-weight-bold text-red`" v-text="'December 2021 - October 2022'">
                        </div>
                    </template>
                    <div>
                        <h3 class="text-white">Salas Transportation Inc - New York, United States Of America</h3>
                        <h4 class="text-white">Fullstack developer in Payroll Manager System, December 2022 - February 2023:</h4>
                        <ul>
                            <li class="text-white">Visual interface design</li>
                            <li class="text-white">Implementation of the web client using Vue.js</li>
                            <li class="text-white">Implementing web client security using Json Web Token</li>
                            <li class="text-white">Consuming services offered by the project backend</li>
                            <li class="text-white">Server-side implementation</li>
                            <li class="text-white">Creation of engineering artifacts for the implementation of business logic</li>
                            <li class="text-white">Database design and use of EntityFramework code first</li>
                            <li class="text-white">Using Json web Token as a security scheme on the server side</li>
                        </ul>
                        <p class="text-white margin-top-10">Reference contact: guillesp67@gmail.com</p>
                    </div>
                </v-timeline-item>
            </v-timeline>

        </v-container>
    </div>
    <div style="margin-top: -20px;">
        <v-img src="/img/wave.svg" height="500" cover></v-img>
    </div>
</template>

<script></script>

Implementation of websocket to display information in real time