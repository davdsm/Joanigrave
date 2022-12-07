<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HeaderView from "./components/HeaderView.vue";
</script>

<template>
  <header class="container mx-auto w-4/5 sticky top-10 mt-28">
    <HeaderView />
  </header>
  <main>
    <RouterView />
  </main>
  <footer>FOOTER</footer>
</template>
