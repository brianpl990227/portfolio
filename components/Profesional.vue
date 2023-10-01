<template>
    <div id="profile" class="p-10">
        <div>
            <h1 class="text-4xl text-center md:text-left">Profesional Profile</h1>
            <div class="divider md:w-52"></div>
            <div class="hero">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="/img/my-photo.jpeg" class="mask mask-squircle md:w-96 rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-3xl font-bold text-center md:text-left">Brian Perez Lopez</h1>

                        <p class="text-center md:text-left mt-4">
                            I am a software engineer with experience developing web applications and RESTful services
                            with asp.net
                            api and
                            Vue.js. I am passionate about creating innovative, scalable, high-quality solutions that
                            meet user needs
                            and
                            business objectives. I have extensive knowledge of software design principles and patterns,
                            as well as
                            coding,
                            testing, and documentation best practices. I characterize myself as an independent and
                            self-managed
                            professional,
                            who plans, organizes and executes his projects with efficiency and responsibility. At the
                            same time, I
                            easily
                            integrate into work teams, using GitHub as a collaboration, version control and code review
                            tool. I like
                            that my
                            coworkers see in me a friend they can count on for whatever they need, we are here to help
                            each other.

                        </p>
                        <div class="flex justify-center md:justify-start">
                            <a class="btn btn-primary mt-4" href="/portfolio/files/cv.pdf" target="_blank">download cv <Download></Download> </a>
                      
                            <a class="btn btn-secondary ml-4 mt-4" href="https://github.com/brianpl990227" target="_blank">Github <GitHub></GitHub></a>
                          
                        </div>
                        
                    </div>
                </div>
            </div>
 
        </div>
       
    </div>
</template>

<script setup>
import GitHub from "@/components/icons/Github.vue";
import Download from "@/components/icons/DownloadIcon.vue";
</script>