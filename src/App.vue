<template>
  <div id="app">
    <v-app>
      <div class="wrapper">
        <HeaderComponent />
  
        <v-main class="main">
          <div class="containers">
            <router-view></router-view>
          </div>
        </v-main>
  
        <FooterComponent />
      </div>
    </v-app>
  </div>
</template>
<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
  },
  methods: {
    ...mapActions(["axioProductsList"]),
  },
  computed:{
    ...mapGetters(["getProductsList"]),
  },
  created() {
    this.axioProductsList();
  },
};
</script>
<style>
.wrapper {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  color: #000000;
}
.containers{
  max-width: 1440px;
  padding: 0;
  margin: 0 auto;
  width: 100%;
  height: auto;
}
.main.v-main{
  padding: 0;
}
ul{
  list-style-type: none;
}
</style>
