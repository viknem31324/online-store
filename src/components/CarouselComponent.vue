<template>
  <v-carousel :height="height" hide-delimiters class="mySlider">
    <template v-slot:prev="{ on, attrs}">
      <v-btn
        class="mySlider__btn"
        color="#fff"
        width="42px"
        height="71px"
        role="img"
        v-bind="attrs"
        v-on="on"
        elevation="0"
        ><img src="../assets/home/carousel/Vector-l.svg" alt=""
      /></v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        class="mySlider__btn"
        color="#fff"
        width="42px"
        height="71px"
        role="img"
        v-bind="attrs"
        v-on="on"
        elevation="0"
        ><img src="../assets/home/carousel/Vector-r.svg" alt=""
      /></v-btn>
    </template>
    <v-carousel-item v-for="(item, i) in arr" :key="i"
      ><v-img :src="item" max-height="450px" contain></v-img
    ></v-carousel-item>
  </v-carousel>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  props: ["product", "height"],
  computed: {
    ...mapGetters(["getProductsList"]),
    arr() {
      let arr = [];
      if (this.product.length) {
        for (let i = 0; i < this.product.length; i++) {
          arr.push(this.product[i].image);
        }
      } else {
        for (let i = 0; i < 5; i++) {
          arr.push(this.product.image);
        }
      }
      return arr;
    },
  },
};
</script>
<style>
.mySlider {
  padding-top: 30px;
}
</style>