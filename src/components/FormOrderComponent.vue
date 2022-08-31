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
              <v-form>
                <v-row>
                  <v-col cols="12" class="formOrder__content pt-5 pb-0">
                    <v-text-field
                      class="formOrder__input mb-6"
                      placeholder="Ваше имя"
                      required
                      outlined
                      height="60"
                      v-model.trim="form.name"
                      :error-messages="$v.$error ? nameErrors : []"
                    />
                    <v-text-field
                      class="formOrder__input mb-6"
                      placeholder="Номер телефона"
                      required
                      outlined
                      height="60"
                      type="number"
                      v-model.number="form.tel"
                      :error-messages="$v.$error ? telErrors : []"
                    />
                    <v-text-field
                      class="formOrder__input mb-6"
                      placeholder="Адрес"
                      required
                      outlined
                      height="60"
                      v-model.trim="form.adress"
                      :error-messages="$v.$error ? adressErrors : []"
                    />
                    <v-text-field
                      class="formOrder__input mb-2"
                      placeholder="Город"
                      required
                      outlined
                      height="60"
                      v-model.trim="form.city"
                      :error-messages="$v.$error ? cityErrors : []"
                    />
                  </v-col>
                  <v-col cols="12" class="formOrder__action pt-5 pb-5">
                    <v-btn
                      class="formOrder__btn formOrder__btn--bot"
                      width="334px"
                      height="60px"
                      color="#57de54"
                      :disabled="$v.$invalid && $v.$error"
                      @click="onSubmit"
                      ><span>Оформить</span></v-btn
                    >
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
import { validationMixin } from "vuelidate";
import { required, minLength, maxLength, alpha, numeric } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: "",
        tel: "",
        adress: "",
        city: "",
      },
      num: Date.now() % 1000000,
      dialog: false,
    };
  },
  validations: {
    form: {
      name: {
        required,
        minLength: minLength(3),
        alpha,
      },
      tel: {
        required,
        minLength: minLength(11),
        maxLength: maxLength(11),
        numeric,
      },
      adress: {
        required,
      },
      city: {
        required,
        alpha,
      },
    },
  },
  computed: {
    ...mapGetters(["getCartList"]),
    nameErrors() {
      const errors = [];
      if (!this.$v.form.name.required)
        errors.push("Обязательно для заполнения.");
      if (!this.$v.form.name.minLength) errors.push("Не меньше двух знаков.");
      if (!this.$v.form.name.alpha)
        errors.push("Только символы алфавита(англ)");
      return errors;
    },
    telErrors() {
      const errors = [];
      if (!this.$v.form.tel.required)
        errors.push("Обязательно для заполнения.");
      if (!this.$v.form.tel.numeric) errors.push("Только цифры");
      if (!this.$v.form.tel.minLength) errors.push("Не менее 11 цифр");
      if (!this.$v.form.tel.maxLength) errors.push("Не более 11 цифр");
      return errors;
    },
    adressErrors() {
      const errors = [];
      if (!this.$v.form.adress.required)
        errors.push("Обязательно для заполнения.");
      return errors;
    },
    cityErrors() {
      const errors = [];
      if (!this.$v.form.city.required)
        errors.push("Обязательно для заполнения.");
      if (!this.$v.form.city.alpha) errors.push("Только символы алфавита");
      return errors;
    },
  },
  methods: {
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sendFormServ(this.form);
        this.clearCartList();
        this.$root.infoClientCheck = true;
        this.$router.push({
          name: "clientInfo",
          query: {
            num: this.num,
          },
        });
        console.log(this.form);
      }
    },

    ...mapActions(["sendFormServ"]),
    ...mapMutations(["clearCartList"]),
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
.formOrder__btn  .v-btn--has-bg{
  background-color: #000;
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
  color: #fff;
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