<template>
  <div class="productList">
    <v-item-group>
      <div class="productList__block productList__containers">
        <v-row>
          <v-col v-for="product in products" :key="product.title" xs="12" sm="6" lg="3" md="4">
            <v-item v-slot="{ toggle }">
              <v-card
                class="productList__myCard myCard mx-auto"
                width="335"
                height="350"
                @click="[toggle, linkPush(product)]"
              >
                <v-img
                  class="myCard__img"
                  :src="product.image"
                  width="333px"
                  height="192px"
                  cols="12"
                ></v-img>
                <v-card-actions class="myCard__action">
                  <v-card-title class="myCard__title" cols="12">
                    {{ product.title }}</v-card-title
                  >
                  <v-col class="myCard__bot" cols="12" md="12">
                    <v-card-text class="myCard__price">{{
                      product.price
                    }} $</v-card-text>
                    <v-btn
                      class="myCard__btn"
                      dark
                      width="147"
                      height="60"
                      color="#57de54"
                    >
                      <span class="myCard__text">Купить</span>
                    </v-btn>
                  </v-col>
                </v-card-actions>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </div>
    </v-item-group>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["products"],
  data(){
    return{
    }
  },
  computed: {
    ...mapGetters(["getProductsList"]),
  },
  methods: {
    linkPush(product) {
      this.$router
        .push({
          name: "product",
          params: { id: product.id },
          query: {
            product: product,
          },
        })
        .catch(() => {});
    },
  },
};
</script>
<style>
.productList {
  padding-bottom: 13px;
}
.productList__myCard {
  display: flex;
  flex-direction: column;
}
.myCard__title.v-card__title {
  width: 100%;
  height: 70px;
  padding: 0;
  padding-left: 25px;
  padding-right: 25px;
  padding-top: 13px;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
  overflow: hidden;
  align-items: start;
}
.myCard__action.v-card__actions {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #c4c4c4;
  padding: 0;
  padding-bottom: 7px;
}
.myCard__price.v-card__text {
  padding: 0;
  padding-top: 12px;
  padding-left: 10px;
  font-weight: 400;
  font-size: 18px;
  color: #000000;
}
.myCard__bot {
  display: flex;
}
.myCard__btn {
  border-radius: 5px;
}
.myCard__text {
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-transform: none;
}
.productList__containers {
  padding: 0px 20px;
  margin: 0;
  width: 100%;
  max-width: none;
}
</style>