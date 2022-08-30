<template>
  <div class="categories">
    <h2 class="categories__title">{{ title }}</h2>
    <ProductListComponent
      class="categories__list"
      :products="pageArr"
    ></ProductListComponent>
    <div class="text-center">
      <v-pagination
        class="categories__pag text--black"
        v-model="page"
        :length="Math.ceil(this.getProductsList.length / 6) - 3"
        @input="onPag()"
        color="#C9DEF1"
        next-icon="mdi-chevron-left"
        prev-icon="mdi-chevron-right"
      ></v-pagination>
    </div>
    <h2 class="topProductTitle">Топ продаж</h2>
    <ProductListComponent :products="getTopProducts"></ProductListComponent>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import ProductListComponent from "./ProductListComponent.vue";

export default {
  data() {
    return {
      page: 1,
      title: "Ваша категория",
      id: this.$route.params["id"],
      categories: [],
      pageArr: [],
    };
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
    },
    id(id) {
      if (id === 1) {
        this.categories = this.getMensProducts;
        this.title = "Men's clothing";
        console.log(this.categories);
      } else if (id === 2) {
        this.categories = this.getJeweleryProducts;
        this.title = "Jewelery";
      } else if (id === 3) {
        this.categories = this.getElectronicsProducts;
        this.title = "Electronics";
      } else if (id === 4) {
        this.categories = this.getWomensProducts;
        this.title = "Women's clothing";
      }
      this.onPag();
    },
  },
  components: {
    ProductListComponent,
  },
  methods: {
    onPag() {
      this.pageArr = [];
      let a = 8;
      for (let i = this.page * a - a; i < this.page * a; i++) {
        if (i > this.categories.length - 1) {
          break;
        } else {
          this.pageArr.push(this.categories[i]);
        }
      }
    },
  },
  mounted() {
    if (this.$route.params["id"] === 1) {
      this.categories = this.getMensProducts;
      this.title = "Men's clothing";
    } else if (this.$route.params["id"] === 2) {
      this.categories = this.getJeweleryProducts;
      this.title = "Jewelery";
    } else if (this.id === 3) {
      this.categories = this.getElectronicsProducts;
      this.title = "Electronics";
    } else if (this.id === 4) {
      this.categories = this.getWomensProducts;
      this.title = "Women's clothing";
    }
    this.onPag();
  },
  computed: {
    ...mapGetters([
      "getProductsList",
      "getTopProducts",
      "getMensProducts",
      "getJeweleryProducts",
      "getElectronicsProducts",
      "getWomensProducts",
    ]),
  },
};
</script>
<style>
.categories__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  padding-top: 30px;
  padding-left: 17px;
}
.categories__list {
  padding-top: 40px;
}
.categories__pag .v-pagination .v-pagination__item {
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
.categories__pag li:nth-child(2){
  margin-left: 52px;
}
.categories__pag .v-pagination__navigation {
  min-width: 60px;
  height: 60px;
}
</style>