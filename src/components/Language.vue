<template>
    <v-container>
        <h1 class="text-center text-main-color">Languages</h1>
        <v-row class="margin-top-10">
            <v-col cols="12" sm="6" class="d-flex flex-direction-column align-items-center">
                <v-progress-circular :rotate="360" :size="200" :width="15" :model-value="100" color="teal">
                    100
                </v-progress-circular>
                <p style="color: teal;" class="margin-top-10">Spanish</p>
            </v-col>
            <v-col cols="12" sm="6" class="d-flex flex-direction-column align-items-center">
                <v-progress-circular :rotate="360" :size="200" :width="15" :model-value="30" color="red">
                    30
                </v-progress-circular>
                <p style="color: red;" class="margin-top-10">English</p>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

</script>