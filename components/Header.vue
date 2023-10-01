<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">

      <div class="w-full navbar bg-slate-800 fixed z-20 opacity-90 backdrop-blur-2xl">
        <div class="flex-1 px-2 mx-2 font-bold">Portfolio</div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">

            <li><a href="#profile">Profesional Profile</a></li>
            <li><a href="#interest">Interests</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#done">Work Done</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <MenuNavIcon></MenuNavIcon>
          </label>
        </div>
      </div>

    </div>
    <div class="drawer-side z-30">
      <label for="my-drawer-3" class="drawer-overlay"></label>

      <ul class="menu p-4 w-80 min-h-full bg-base-200">
        <div>
          <div>

          </div>
          <div class="flex mt-5">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="/img/my-photo.jpeg" alt="Brian Perez Lopez" />
              </div>
            </div>
            <div class="ml-4 mt-2">
              <p class="text-xl font-bold">Brian Perez Lopez</p>
              <p>brianpl990227@gmail.com</p>
            </div>

          </div>
        </div>
        <li class="mt-10"><a href="#profile">Profesional Profile</a></li>
        <li><a href="#interest">Interests</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#done">Work Done</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import MenuNavIcon from "@/components/icons/MenuNavIcon.vue";


</script>