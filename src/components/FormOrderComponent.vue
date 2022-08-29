<template>
  <div class="formOrder">
    <v-row justify="center">
      <v-dialog v-model="dialog" max-width="354px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            class="formOrder__btn"
            width="334px"
            height="60px"
            dark
            color="#57de54"
            ><span>Оформить</span></v-btn
          >
        </template>
        <v-card v-if="getCartList.length === 0" class="formOrder__bool"
          >Добавьте товар в корзину</v-card
        >
        <v-card v-else class="formOrder__card pa-0">
          <v-card-text class="formOrder__content pa-0">
            <v-container>
              <v-row>
                <v-col cols="12" class="formOrder__content pt-5 pb-0">
                  <v-text-field
                    class="formOrder__input mb-2"
                    placeholder="Ваше имя"
                    required
                    outlined
                    height="60"
                    v-model.trim="name"
                    :rules="rules"
                  />
                  <v-text-field
                    class="formOrder__input mb-2"
                    placeholder="Номер телефона"
                    required
                    outlined
                    height="60"
                    type="number"
                    v-model.number="tel"
                  />
                  <v-text-field
                    class="formOrder__input mb-2"
                    placeholder="Адрес"
                    required
                    outlined
                    height="60"
                    v-model.trim="adress"
                    :rules="rules"
                  />
                  <v-text-field
                    class="formOrder__input mb-2"
                    placeholder="Город"
                    required
                    outlined
                    height="60"
                    v-model.trim="city"
                    :rules="rules"
                  />
                </v-col>
                <v-col cols="12" class="formOrder__action pt-0 pb-5">
                  <v-btn
                    class="formOrder__btn formOrder__btn--bot"
                    width="334px"
                    height="60px"
                    dark
                    color="#57de54"
                    @click="[sendForm()]"
                    ><span>Оформить</span></v-btn
                  >
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";

export default {
  data() {
    return {
      rules: [(value) => !!value, (value) => value && value.length >= 3],
      name: "",
      tel: "",
      adress: "",
      city: "",
      num: Date.now() % 1000000,
      dialog: false,
    };
  },
  computed: {
    ...mapGetters(["getCartList"]),
  },
  methods: {
    ...mapActions(["sendFormServ"]),
    ...mapMutations(["clearCartList"]),
    sendForm() {
      if (
        this.name != "" &&
        this.tel != "" &&
        this.adress != "" &&
        this.city != ""
      ) {
        let form = {
          name: this.name,
          tel: this.tel,
          adress: this.adress,
          city: this.city,
          num: this.num,
        };
        this.sendFormServ(form);
        this.dialog = false;
        this.clearCartList();
        this.$root.infoClientCheck = true;
        this.$router.push({
          name: "clientInfo",
          query: {
            num: this.num,
          },
        });
      }
    },
  },
};
</script>
<style>
input::placeholder {
  color: #000;
}

.formOrder__btn {
  margin-top: 15px;
}
.formOrder__btn--bot {
  margin-top: 8px;
}
.formOrder__btn span {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  text-transform: none;
}
.formOrder__input.v-input {
  width: 334px;
  height: 60px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  color: #000000;
  box-shadow: none;
}
.formOrder__bool {
  padding: 40px;
  font-size: 20px;
}
</style>