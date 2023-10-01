<template>
    <div class="relative h-screen flex flex-col items-center justify-between">
        <div></div>
        <div class="mockup-code mx-4 w-80">
            <pre data-prefix="$"><code>{{ code.command }}</code></pre>
            <pre data-prefix=">" class="text-warning"><code>{{ code.com }}</code></pre>
            <pre data-prefix=">" class="text-success"><code>{{ code.final }}</code></pre>
        </div>
        <div class="flex justify-center mb-16">
            <div class="w-10 rounded-full animate-bounce z-10">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                    <g id="feArrowDown0" fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">
                        <g id="feArrowDown1" fill="white">
                            <path id="feArrowDown2" d="m6 7l6 6l6-6l2 2l-8 8l-8-8z"></path>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from "vue";


const code = ref({
    command: '',
    com: '',
    final: ''
})

const text = 'dotnet run'


const updateCode = async times => {

    if (times == 20) {
        return;
    }

    for (let i = 0; i < 10; i++) {
        await wait(0.2)
        code.value.command += text[i]
    }

    if (code.value.command == text) {
        await wait(1)
        code.value.com = 'Compiling...'

        await wait(2)
        code.value.final = 'Welcome to my portfolio'
        await wait(5)

        code.value = {
            command: '',
            com: '',
            final: ''
        }

    }

    setTimeout(updateCode, 100, (times + 1))

}

function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

setTimeout(updateCode, 100, 0)


</script>