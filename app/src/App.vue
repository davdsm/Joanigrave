<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderView from "./components/HeaderView.vue";
</script>

<template>
  <header
    class="entry delay1 sticky mx-auto top-10 w-4/5 flex justify-center z-10 sm:mt-24 sm:-mb-24"
  >
    <HeaderView />
  </header>
  <main class="overflow-x-hidden">
    <RouterView />
  </main>
  <footer>FOOTER</footer>
</template>
