<template>
  <v-container class="home home__containers">
    <CarouselComponent
      class="home__carousel"
      :product="getProductsList"
      :height="'533px'"
    ></CarouselComponent>
    <h2 class="topProductTitle">Товары</h2>
    <ProductListComponent :products="pageArr"></ProductListComponent>
    <div class="text-center">
      <v-pagination
        class="home__pag text--black"
        v-model="page"
        :length="Math.ceil(this.getProductsList.length / 6) - 1"
        @input="onPag()"
        next-icon="mdi-menu-left"
        prev-icon="mdi-menu-right"
      ></v-pagination>
    </div>
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
      page: 1,
      pageArr: [],
      products: [],
    };
  },
  methods: {
    ...mapActions(["axioProductsList", "onPag"]),
    onPag() {
      this.pageArr = [];
      let a = 8;
      for (let i = this.page * a - a; i < this.page * a; i++) {
        if (i > this.products.length - 1) {
          break;
        } else {
          this.pageArr.push(this.products[i]);
        }
      }
    },
  },
  mounted() {
    this.axioProductsList();
    this.products = this.getProductsList;
    console.log(this.getProductsList.length);
    this.onPag();
  },
  computed: {
    ...mapGetters(["getProductsList", "getTopProducts", "getCartCount"]),
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
.home__pag .v-pagination .v-pagination__item {
  min-width: 60px;
  height: 60px;
  color: black;
  box-shadow: none;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  margin-right: 52px;
  background: #c9def1 !important;
}
.home__pag li:nth-child(2){
  margin-left: 52px;
}
.home__pag .v-pagination__navigation {
  min-width: 60px;
  height: 60px;
}
</style>