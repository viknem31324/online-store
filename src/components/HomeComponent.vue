<template>
  <v-container class="home home__containers">
    <CarouselComponent
      class="home__carousel"
      :product="getProductsList"
      :height="'533px'"
    ></CarouselComponent>
    <h2 class="topProductTitle">Товары</h2>
    <ProductListComponent :products="getProductsList"></ProductListComponent>
    <h2 class="topProductTitle">Топ продаж</h2>
    <ProductListComponent :products="getTopProducts"></ProductListComponent>
  </v-container>
</template>
<script>
import CarouselComponent from "./CarouselComponent.vue";
import ProductListComponent from "./ProductListComponent.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          src: "https://catherineasquithgallery.com/uploads/posts/2021-02/1612683978_74-p-zelenii-les-fon-146.jpg",
          title: "первый товар",
          price: "100р",
        },
        {
          id: 2,
          src: "https://catherineasquithgallery.com/uploads/posts/2021-03/1614624808_1-p-fon-lesa-dlya-fotoshopa-1.jpg",
          title: "второй товар",
          price: "200р",
        },
        {
          id: 3,
          src: "https://1rulon.ru/wp-content/uploads/55268.jpg",
          title: "третий товар",
          price: "300р",
        },
        {
          id: 4,
          src: "https://1rulon.ru/wp-content/uploads/55268.jpg",
          title: "четвертый товар",
          price: "300р",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["axioProductsList"]),
  },
  computed: {
    ...mapGetters(["getProductsList", "getTopProducts"]),
  },
  components: {
    CarouselComponent,
    ProductListComponent,
  },
};
</script>
<style>
.home__containers.container {
  padding: 0;
  margin: 0;
  width: 100%;
  max-width: none;
}
.topProductTitle {
  text-align: left;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  padding-top: 33px;
  padding-left: 20px;
  padding-bottom: 10px;
}
</style>