import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './store/store'

Vue.config.productionTip = false

Vue.directive('blur', {
  inserted(el) {
    el.addEventListener("focusout", () => {
      if (el.value <= 1) {
        el.value = 1;
      }
      if (el.value > 100) {
        el.value = 100;
      }
    });
  }
});


new Vue({
  data() {
    return {
      infoClientCheck: false,
    }
  },
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
