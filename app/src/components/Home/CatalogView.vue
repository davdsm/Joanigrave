<script lang="ts">
import { getServices } from '@/redux/calls';

export default {
  data() {
    return {
      services: <any>false,
    };
  },
  async beforeMount() {
    this.services = await getServices()
  },
};
</script>
<template>
  <div class="container mx-auto my-32 px-8">
    <section id="ServicesView">
      <div class="mx-auto">
        <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2
            class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
          >
            Todos os serviços de serigrafia.
          </h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">
            A serigrafia é uma técnica de impressão que utiliza uma tela de
            malha fina, uma estampa e uma tinta especial para transferir
            desenhos e textos para uma superfície.
          </p>
        </div>
       <div
          class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0"
        >
          <div v-for="service in services" :key="service.id">
            <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-700 lg:h-12 lg:w-12 bg-sky-700" v-html="service.icon"></div>
            <h3 class="mb-2 text-xl font-bold dark:text-white">{{service.name}}</h3>
            <p class="text-gray-500 dark:text-gray-400">
              {{service.description}}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
