<template>
  <v-form ref="form" v-model="valid" lazy-validation class="myForm">
    <v-text-field
      class="myForm__input myForm__name mt-5"
      v-model.trim="name"
      :rules="nameRules"
      label="Ваше имя"
      outlined
      height="60"
      required
    ></v-text-field>

    <v-text-field
      class="myForm__input myForm__feed mt-5"
      v-model.trim="feed"
      :rules="feedRules"
      label="Ваш отзыв"
      outlined
      height="120"
      required
    ></v-text-field>
    <v-btn
      class="myForm__btn mt-4"
      width="216px"
      height="60px"
      dark
      color="#57de54"
      @click="[validate(), sendFeedback()]"
      ><span>Отправить</span></v-btn
    >
  </v-form>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      valid: true,
      name: "",
      nameRules: [(v) => !!v],
      feed: "",
      feedRules: [(v) => !!v],
      date: "",
    };
  },

  methods: {
    ...mapActions(["addFeedback"]),
    validate() {
      this.$refs.form.validate();
    },
    sendFeedback() {
      this.date = this.createdDay;
      if (this.$refs.form.validate() == true) {
        this.addFeedback({
          name: this.name,
          text: this.feed,
          date: this.date,
        });
        this.name = "";
        this.feed = "";
      }
    },
  },
  computed: {
    ...mapGetters(["createdDay", "getFeedback"]),
  },
};
</script>
<style>
.myForm__input.v-input {
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
}
.myForm__name {
  width: 453px;
  height: 60px;
}
.myForm__feed {
  width: 453px;
  height: 120px;
}
.myForm__btn span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-transform: none;
}
.myForm__btn {
  margin-left: 235px;
}
</style>
