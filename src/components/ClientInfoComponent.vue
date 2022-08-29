<template>
  <div class="clientInfo">
    <h2 class="clientInfo__title">Спасибо за заказ!</h2>
    <p class="clientInfo__num">Номер вашего заказа №{{ num }}</p>
    <p class="clientInfo__descr">
      Наш менеджер свяжется с вами в ближайшее время
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: this.$route.query.num,
    };
  },
  created() {
    console.log(this.$root.infoClientCheck);
    if (this.$root.infoClientCheck == false) {
      this.$router.push("/");
    }
  },
  mounted() {
    setTimeout(() => {
      this.$root.infoClientCheck = false;
      this.$router.push("/");
    }, 3000);
  },
};
</script>
<style>
.clientInfo {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: #000000;
  padding-top: 119px;
}
.clientInfo__title {
  font-size: 36px;
  line-height: 42px;
}
.clientInfo__num {
  font-size: 48px;
  line-height: 56px;
}
.clientInfo__descr {
  font-size: 24px;
  line-height: 28px;
}
</style>