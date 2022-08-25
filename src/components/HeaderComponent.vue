<template>
  <v-app-bar app color="#c9def1" height="100px" class="header">
    <div class="containers header__containers">
      <v-app-bar-nav-icon width="71px" height="71px" class="header__logo">
        <img class="header__img" src="../assets/header/vue-logo.svg" alt="" />
      </v-app-bar-nav-icon>
      <v-app-bar-title>
        <h2 class="header__title">VUE-SPA-SHOP</h2>
      </v-app-bar-title>
      <nav class="header__nav">
        <ul class="header__list">
          <router-link
            class="header__link"
            tag="li"
            v-for="item in links"
            :key="item.title"
            :to="item.path"
            >{{ item.title }}</router-link
          >
        </ul>
      </nav>
      <div class="header__phone">
        <v-icon color="black" aria-hidden="false">phone</v-icon>
        <a class="header__tel black--text" href="tel:+74999999999"
          >+7 (499) 999 99 99</a
        >
      </div>
      <div class="header__cart cart">
        <v-btn  elevation="0" icon
          ><v-icon class="cart__shoppingCart" large color="black" aria-hidden="false">
            shopping_cart</v-icon
          ></v-btn
        >
        <div class="cart__counter"></div>
      </div>
    </div>
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      links: [
        { title: "Категории", path: "/" },
        { title: "Новости", path: "/news" },
        { title: "О нас", path: "/about" },
      ],
    };
  },
};
</script>
<style>
.header__containers {
  display: flex;
  padding: 0;
  width: 100%;
}
.cart__counter {
  position: absolute;
  top: 13px;
  left: 24px;
  width: 30px;
  height: 30px;
  background: #fe0404;
  border-radius: 50%;
}
.cart__counter::before {
  content: "2";
  position: absolute;
  left: 11px;
  top: 6px;
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
</style>