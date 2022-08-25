<template>
  <div class="product">
    <div class="product__title">{{ product.title }}</div>
    <div class="product__top">
      <CarouselComponent
        class="product__carousel"
        :product="product"
        :height="'524px'"
      ></CarouselComponent>
      <div class="product__active">
        <div class="product__price">Цена: {{ product.price }} $</div>
        <div class="product__block">
          <div class="product__counter counter">
            <v-icon
              class="counter__prepend"
              slot="prepend"
              color="black"
              x-large
              @click="prepend()"
            >
              remove
            </v-icon>
            <input
              class="counter__input"
              type="number"
              min="0"
              v-model="counter"
              v-blur
            />
            <v-icon
              class="counter__append"
              slot="append"
              color="black"
              x-large
              @click="append()"
            >
              add
            </v-icon>
          </div>
          <v-btn
            class="product__btn"
            width="281px"
            height="60px"
            dark
            color="#57de54"
            ><span>Купить</span></v-btn
          >
        </div>
      </div>
    </div>
    <div class="product__tab myTab">
      <template>
        <v-tabs
          class="myTab__tabs"
          height="60"
          color="#000"
          v-model="tab"
          align-with-title
        >
          <v-tab class="myTab__item ml-0" v-for="item in tabs" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>

      <v-tabs-items v-model="tab">
        <v-tab-item class="options">
          <v-card class="myTab__element" height="288" flat color="#C9DEF1">
            <ul class="options__list">
              <li>Оценка.......................{{ product.rating.rate }}</li>
              <li>
                Количество.......................{{ product.rating.count }}
              </li>
            </ul>
          </v-card>
        </v-tab-item>
        <v-tab-item class="description">
          <v-card class="myTab__element" height="288" flat color="#C9DEF1">
            <v-card-text class="description__block">
              <p class="description__text">
                {{ product.description }}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item class="feedback">
          <v-card class="myTab__element" height="288" flat color="#C9DEF1">
            <ul class="feedback__list">
              <li
                class="feedback__item message"
                v-for="message in feedback"
                :key="message.name"
              >
                <v-card
                  light
                  class="message__item"
                  width="654"
                  color="#C9DEF1"
                  elevation="0"
                >
                  <v-card-title class="message__name pb-1 pt-0">{{
                    message.name
                  }}</v-card-title>
                  <v-card-text class="pb-1">
                    <p class="message__text">
                      {{ message.text }}
                    </p>
                  </v-card-text>
                  <v-card-text class="message__date pb-0 pt-0">
                    <p class="message__date">
                      {{ message.date }}
                    </p>
                  </v-card-text>
                </v-card>
              </li>
            </ul>
            <v-card-text></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </div>
    <h2 class="topProductTitle topProductTitle--one">Топ продаж</h2>
    <ProductListComponent :products="getTopProducts"></ProductListComponent>
  </div>
</template>
<script>
import CarouselComponent from "./CarouselComponent.vue";
import ProductListComponent from "./ProductListComponent.vue";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      tab: null,
      tabs: ["Характеристики", "Описание", "Отзывы"],
      feedback: [
        {
          name: "UserName1",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias culpa dicta eligendi, exercitationem impedit nisi? Adipisci animi aspernatur assumenda delectus et explicabo fugiat ipsa itaque molestias necessitatibus placeat, rem",
          date: "29 февраля 2020",
        },
        {
          name: "UserName2",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus alias culpa dicta eligendi, exercitationem impedit nisi? Adipisci animi aspernatur assumenda delectus et explicabo fugiat ipsa itaque molestias necessitatibus placeat, rem",
          date: "29 февраля 2020",
        },
      ],
      counter: 0,
      id: this.$route.params["id"],
      product: this.$route.query.product,
    };
  },
  watch: {
    $route(toR) {
      this.id = toR.params["id"];
      this.product = toR.query.product;
    },
  },
  methods: {
    append() {
      if (this.counter < 0) {
        this.counter = 0;
      }
      this.counter++;
    },
    prepend() {
      if (this.counter > 0) {
        this.counter--;
      }
    },
  },
  components: {
    CarouselComponent,
    ProductListComponent,
  },
  computed: {
    ...mapGetters(["getProductsList", "getTopProducts"]),
  },
};
</script>
<style>
.product {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
.product__title {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: #000000;
  padding-top: 8px;
}
.product__top {
  display: flex;
}
.product__carousel.v-carousel {
  max-width: 927px;
  padding-top: 30px;
  box-sizing: content-box;
}

.product__price {
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  color: #000000;
  padding-top: 30px;
  padding-left: 20px;
}
.product__block {
  display: flex;
  padding-top: 20px;
  padding-left: 20px;
}
.product__counter {
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
.counter__input {
  width: 68px;
  text-align: center;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.counter__prepend {
  padding-left: 5px;
}
.product__btn {
  border-radius: 5px;
  margin-left: 12px;
}
.product__btn span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-transform: none;
}
.product__tab {
  margin-top: 30px;
}
.myTab__item.v-tab {
  width: 217px;
  background: #d6e6f5;
  border-radius: 5px 5px 0px 0px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: #000000;
  text-transform: none;
  letter-spacing: normal;
  margin-right: 19px;
}
.myTab__item.v-tab--active {
  background: #c9def1;
}
.description__block.v-card__text {
  padding: 0px;
}
.myTab__element {
  padding: 20px;
}
.options__list {
  list-style-type: none;
}
.description__text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  padding-bottom: 10px;
}
.message__text {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
}
.topProductTitle--one {
  padding: 0;
  padding-top: 10px;
  margin-bottom: 10px;
}
</style>