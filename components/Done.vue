<template>
    <div id="done" class="center mt-10">
        <div class="p-10">
            <h1 class="text-4xl my-shadow">Work Done</h1>
            <div class="divider md:w-52"></div>

            <div>
                <h1 class="text-2xl">{{ selected.company }}</h1>
                <p class="text-lg">{{ selected.position }} {{ selected.date }}: </p>
                <ul>
                    <li v-for="(item, index) in selected.tasks" data-content="✓">{{ index + 1 }}.
                        {{ item }}</li>
                </ul>
                <p>Reference contact: {{ selected.contact }}</p>
            </div>

            <div class="flex justify-center mt-4">
                <div class="join">
                    <button v-for="(item, index) in projects" @click="select(index)" class="join-item btn btn-md">{{ index +
                        1 }}</button>

                </div>
            </div>

        </div>
    </div>
</template>

<script setup>


const select = (index) => {
    selected.value = projects[index]
}

const selected = ref({
    company: 'Salas Transportation Inc - New York, United States Of America',
    position: 'Fullstack Developer in Fleet System',
    tasks: [
        'Visual interface design',
        'Implementation of the web client using Vue.js',
        'Consuming services offered by the project backend',
        'Management of vehicle files under the regulations of the United States Department of Transportation',
        'Creation of engineering artifacts for the implementation of business logic',
        'Database design and use of EntityFramework code first',
        'Using Json web Token as a security scheme on the server side',
        'Monitoring of repairs, oil changes and other operations on the vehicle',
    ],
    date: 'May 2023 - July 2023',
    contact: 'guillesp67@gmail.com'
})

const projects = [{
    company: 'Salas Transportation Inc - New York, United States Of America',
    position: 'Fullstack Developer in Fleet System',
    tasks: [
        'Visual interface design',
        'Implementation of the web client using Vue.js',
        'Consuming services offered by the project backend',
        'Management of vehicle files under the regulations of the United States Department of Transportation',
        'Creation of engineering artifacts for the implementation of business logic',
        'Database design and use of EntityFramework code first',
        'Using Json web Token as a security scheme on the server side',
        'Monitoring of repairs, oil changes and other operations on the vehicle',
    ],
    date: 'May 2023 - July 2023',
    contact: 'guillesp67@gmail.com'
}, {
    company: 'Salas Transportation Inc - New York, United States Of America',
    position: 'Fullstack Developer in Human Resources',
    tasks: [
        'Visual interface design',
        'Implementation of the web client using Vue.js',
        'Consuming services offered by the project backend',
        'Server-side implementation',
        'Creation of engineering artifacts for the implementation of business logic',
        'Database design and use of EntityFramework code first',
        'Using Json web Token as a security scheme on the server side',
        'Recruitment of personnel taking into account the federal and state law of the United States of America',
        'Job application management',
        'Employee document management',
        'Websocket management with SignalR',
    ],
    date: 'March 2023 - May 2023',
    contact: 'guillesp67@gmail.com'
},
{
    company: 'Salas Transportation Inc - New York, United States Of America',
    position: 'Fullstack developer in Timer System',
    tasks: [
        'Visual interface design',
        'Implementation of the web client using Vue.js',
        'Consuming services offered by the project backend',
        'Server side implementation',
        'Creation of engineering artifacts for the implementation of business logic',
        'Database design and use of EntityFramework code first',
        'Using Json web Token as a security scheme on the server side',
    ],
    date: 'February 2023 - March 2023',
    contact: 'guillesp67@gmail.com'
},
{
    company: 'Salas Transportation Inc - New York, United States Of America',
    position: 'Fullstack developer in Payroll Manager System',
    tasks: [
        'Visual interface design',
        'Implementation of the web client using Vue.js',
        'Consuming services offered by the project backend',
        'Server side implementation',
        'Creation of engineering artifacts for the implementation of business logic',
        'Database design and use of EntityFramework code first',
        'Using Json web Token as a security scheme on the server side',
    ],
    date: 'December 2022 - February 2023',
    contact: 'guillesp67@gmail.com'
},
{
    company: 'Centro de Informática Médica (CESIM) - La Habana, Cuba',
    position: 'Frontend developer in BrainsSys Cluster',
    tasks: [
        'Visual interface design',
        'Implementation of the web client using Vue.js',
        'Implementing web client security using Json Web Token',
        'Consuming services offered by the project backend',
        'Implementation of websocket to display information in realtime',
    ],
    date: 'December 2021 - October 2022',
    contact: 'aorellana@uci.cu'
},
]



</script>