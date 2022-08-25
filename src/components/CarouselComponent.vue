<template>
  <v-carousel :height="height" hide-delimiters class="mySlider">
    <template v-slot:prev="{ on, attrs }">
      <v-btn
        class="mySlider__btn"
        color="transparent"
        width="42px"
        height="71px"
        role="img"
        v-bind="attrs"
        v-on="on"
        ><img src="../assets/home/carousel/Vector-l.svg" alt=""
      /></v-btn>
    </template>
    <template v-slot:next="{ on, attrs }">
      <v-btn
        class="mySlider__btn"
        color="transparent"
        width="42px"
        height="71px"
        role="img"
        v-bind="attrs"
        v-on="on"
        ><img src="../assets/home/carousel/Vector-r.svg" alt=""
      /></v-btn>
    </template>
    <v-carousel-item
      v-for="(item, i) in arr"
      :key="i"
      :src="item"
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
.mySlider__btn.v-window__next {
  background: transparent;
}
</style>