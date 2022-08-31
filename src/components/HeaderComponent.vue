<template>
  <v-app-bar app color="#c9def1" height="100px" class="header">
    <div class="containers header__containers">
      <router-link tag="div" class="header__blockLink" to="/">
        <v-app-bar-nav-icon width="71px" height="71px" class="header__logo">
          <img class="header__img" src="../assets/header/vue-logo.svg" alt="" />
        </v-app-bar-nav-icon>
        <v-app-bar-title>
          <h2 class="header__title">VUE-SPA-SHOP</h2>
        </v-app-bar-title>
      </router-link>
      <nav class="header__nav">
        <ul class="header__list">
          <li class="header__link">
            <v-menu open-on-hover bottom offset-y>
              <template v-slot:activator="{ on, attrs }">
                <div v-bind="attrs" v-on="on">Категории</div>
              </template>

              <v-list>
                <v-list-item
                  class="header__link"
                  v-for="item in categories"
                  :key="item.title"
                >
                  <router-link tag="div" :to="item.path" >{{
                    item.title
                  }}</router-link>
                  <li></li
                ></v-list-item>
              </v-list>
            </v-menu>
          </li>

          <router-link class="header__link" tag="li" to="/news"
            >Новости</router-link
          >
          <router-link class="header__link" tag="li" to="/about"
            >О нас</router-link
          >
        </ul>
      </nav>
      <div class="header__phone">
        <v-icon color="black" aria-hidden="false">phone</v-icon>
        <a class="header__tel black--text" href="tel:+74999999999"
          >+7 (499) 999 99 99</a
        >
      </div>
      <router-link tag="div" to="/shopcart" class="header__cart cart">
        <v-btn elevation="0" icon
          ><v-icon
            class="cart__shoppingCart"
            large
            color="black"
            aria-hidden="false"
          >
            shopping_cart</v-icon
          ></v-btn
        >
        <div class="cart__counter">{{ getCartCount }}</div>
      </router-link>
    </div>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      categories: [
        {
          title: "Men's clothing",
          path: {
            name: "categories",
            params: { id: 1 },
          },
        },
        {
          title: "Jewelery",
          path: {
            name: "categories",
            params: { id: 2},
          },
        },
        {
          title: "Electronics",
          path: {
            name: "categories",
            params: { id: 3 },
          },
        },
        {
          title: "Women's clothing",
          path: {
            name: "categories",
            params: { id: 4 },
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters([
      "getCartCount",
      "getMensProducts",
      "getJeweleryProducts",
      "getElectronicsProducts",
      "getWomensProducts",
    ]),
  },
};
</script>
<style>
.activ-link-menu {
  color: "#c9def1";
}
.header__containers {
  display: flex;
  padding: 0;
  width: 100%;
}
.cart__counter {
  position: absolute;
  display: flex;
  top: 13px;
  left: 24px;
  width: 30px;
  height: 30px;
  background: #fe0404;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
}
.header__cart {
  position: relative;
  margin-left: 195px;
  padding-top: 20px;
}
.cart__shoppingCart {
  width: 49.17px;
  height: 49.17px;
}
.header__phone {
  padding-top: 25px;
}
.header__tel {
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
}
.header__nav {
  padding-top: 25px;
}
.header__list {
  display: flex;
  padding: 0;
  padding-left: 23px;
  padding-right: 352px;
}
.header__link {
  list-style-type: none;
  cursor: pointer;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.header__link:not(:last-child) {
  margin-right: 50px;
}
.header__img {
  height: 71px;
  width: 71px;
}
.header__logo {
  margin-left: 24px;
}
.header__title {
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
  padding-top: 22px;
  margin-left: 17px;
}
.header__blockLink {
  display: flex;
  cursor: pointer;
}
</style>