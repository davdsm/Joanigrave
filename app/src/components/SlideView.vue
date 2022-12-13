<script lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";

export default {
  setup() {
    return {
      settings: {
        autoplay: true,
        itemsToShow: 3,
        itemsToScroll: 1,
        wrapAround: true,
        transition: 10000,
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
      images: <Array<string>>[
        "/slide/1.jpg",
        "/slide/2.jpg",
        "/slide/3.jpg",
        "/slide/4.jpg",
        "/slide/5.jpg",
        "/slide/6.jpg",
        "/slide/7.jpg",
      ],
    };
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
  >
    <slide
      v-for="(image, index) in images"
      :key="index"
      :style="{ height: 200 }"
    >
      <div class="w-full h-full">
        <img
          class="w-full h-full object-cover"
          :src="image"
          alt="JoaniGrave Photos"
        />
      </div>
    </slide>
  </carousel>
</template>
