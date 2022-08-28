<template>
  <div class="shopCart">
    <h2 class="shopCart__title">Ваша корзина</h2>
    <div class="shopCart__block">
      <v-row>
        <v-col class="shopCart__list pa-0 pr-5" xs="12" sm="12" md="12" lg="9">
          <p class="shopCart__visibl" v-if="getCartList.length == 0">
            Корзина пуста
          </p>
          <v-item-group v-else>
            <v-row>
              <v-col
                v-for="item in getCartList"
                :key="item.cart.title"
                xs="12"
                sm="6"
                md="4"
              >
                <v-item>
                  <v-card
                    class="shopCart__myCard myCard mx-auto"
                    width="335"
                    height="350"
                  >
                    <v-img
                      class="myCard__img"
                      :src="item.cart.image"
                      width="333px"
                      max-height="192px"
                      contain
                    ></v-img>
                    <v-card-actions class="myCard__action">
                      <v-card-title class="myCard__title">
                        {{ item.cart.title }}</v-card-title
                      >
                      <v-col
                        class="myCard__bot shopCart__bot pl-4 pr-4 pt-2 pb-5"
                      >
                        <v-card-text class="myCard__price pt-5"
                          >{{ item.cart.price }} $</v-card-text
                        >
                        <div class="shopCart__counter counter">
                          <v-icon
                            class="counter__prepend"
                            slot="prepend"
                            color="black"
                            x-large
                            @click="prependCount(item.cart)"
                          >
                            remove
                          </v-icon>
                          <input
                            class="counter__input"
                            type="number"
                            min="1"
                            max="100"
                            v-model="item.count"
                            v-blur
                          />
                          <v-icon
                            class="counter__append"
                            slot="append"
                            color="black"
                            x-large
                            @click="appendCount(item.cart)"
                          >
                            add
                          </v-icon>
                        </div>
                      </v-col>
                    </v-card-actions>
                  </v-card>
                </v-item>
              </v-col>
            </v-row>
          </v-item-group>
        </v-col>
        <v-col class="shopCart__active pa-0" xs="12" sm="12" md="12" lg="3">
          <div class="shopCart__price">Итого: {{ getPriceAllCart }} $</div>
          <v-btn
            class="shopCart__btn"
            width="334px"
            height="60px"
            dark
            color="#57de54"
            ><span>Оформить</span></v-btn
          >
        </v-col>
      </v-row>
    </div>
    <h2 class="topProductTitle topProductTitle--shop">Топ продаж</h2>
    <ProductListComponent :products="getTopProducts"></ProductListComponent>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import ProductListComponent from "./ProductListComponent.vue";

export default {
  data() {
    return {
      arr: JSON.parse(localStorage.getItem("cartList")),
    };
  },
  computed: {
    ...mapGetters(["getTopProducts", "getCartList", "getPriceAllCart"]),
  },
  methods: {
    ...mapActions(["appendCount", "prependCount", "createCartList"]),
  },
  components: {
    ProductListComponent,
  },
};
</script>
<style>
.shopCart {
  padding-bottom: 30px;
}
.shopCart__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  padding-top: 29px;
  padding-left: 17px;
}
.shopCart__block {
  padding-top: 40px;
  padding-left: 25px;
}
.shopCart__visibl {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 26px;
  line-height: 42px;
  color: #000000;
  text-align: center;
  border: 1px solid black;
}
.shopCart__price {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
}
.shopCart__btn {
  margin-top: 15px;
}
.shopCart__btn span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-transform: none;
}
.shopCart__myCard {
  display: flex;
  flex-direction: column;
}
.shopCart__counter {
  position: relative;
  display: flex;
  width: 160px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
}
.topProductTitle--shop {
  padding-top: 40px;
}
</style>