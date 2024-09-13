<script lang="ts">
import { getGallery } from '@/redux/calls';

export default {
  data() {
    return {
      images: <any>false,
      path: "http://192.168.1.106:8090/api/files/",
    };
  },
  async beforeMount() {
    this.images = await getGallery()
  },
};
</script>
<template>
  <div class="container mx-auto my-32 px-8" v-if="images.length > 0" >
    <section class="text-gray-600 body-font">
      <div class="px-5 pt-24 mx-auto flex flex-wrap">
        <div class="flex w-full mb-20 flex-wrap">
          <h1
            class="sm:text-3xl text-2xl font-medium title-font dark:text-white lg:w-1/3 lg:mb-0 mb-4"
          >
            Galeria de imagens para admiração.
          </h1>
          <p class="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
            Ver uma galeria de fotos é quase como estar lá pessoalmente. As
            imagens capturam os detalhes e a essência de um lugar ou evento de
            uma maneira que as palavras simplesmente não conseguem. É uma
            maneira incrível de ter uma visão do mundo e de experiências
            diferentes sem sair do conforto de casa.
          </p>
        </div>
        <div class="flex flex-wrap md:-m-2 -m-1">
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                :src="path + images[0].collectionId + '/' + images[0].id + '/' + images[0].image"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                :src="path + images[1].collectionId + '/' + images[1].id + '/' + images[1].image"
              />
            </div>
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                :src="path + images[2].collectionId + '/' + images[2].id + '/' + images[2].image"
              />
            </div>
          </div>
          <div class="flex flex-wrap w-1/2">
            <div class="md:p-2 p-1 w-full">
              <img
                alt="gallery"
                class="w-full h-full object-cover object-center block"
                :src="path + images[3].collectionId + '/' + images[3].id + '/' + images[3].image"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                :src="path + images[4].collectionId + '/' + images[4].id + '/' + images[4].image"
              />
            </div>
            <div class="md:p-2 p-1 w-1/2">
              <img
                alt="gallery"
                class="w-full object-cover h-full object-center block"
                :src="path + images[5].collectionId + '/' + images[5].id + '/' + images[5].image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
