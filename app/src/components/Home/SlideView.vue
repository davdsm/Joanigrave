<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { getSlide } from '@/redux/calls';

export default {
  setup() {
    return {
      settings: {
        autoplay: true,
        itemsToShow: 3,
        itemsToScroll: 1,
        wrapAround: true,
        transition: 10000,
        mouseDrag: true,
        touchDrag: true,
      },
      breakpoints: {
        300: {
          itemsToShow: 1.5,
          snapAlign: "center",
        },
        1024: {
          itemsToShow: 5,
          snapAlign: "start",
        },
      },
    };
  },
  data() {
    return {
      images: <Array<any>>[],
      path: "http://192.168.1.94:8090/api/files/"
    };
  },
  async beforeMount() {
    this.images = await getSlide()
  },
  components: {
    Carousel,
    Slide,
    Navigation,
    Pagination,
  },
};
</script>
<template>
  <carousel
    :settings="settings"
    class="mt-40 max-sm:mt-20"
    :breakpoints="breakpoints"
    v-if="images.length > 0" 
  >
    <slide
      v-for="(image, index) in images"
      :key="index"
      :style="{ height: 200 }"
    >
      <div class="w-full h-full">
        <img
          class="w-full h-full object-cover"
          :src="path + image.collectionId + '/' + image.id + '/' + image.image"
          alt="JoaniGrave Photos"
        />
      </div>
    </slide>
  </carousel>
</template>
