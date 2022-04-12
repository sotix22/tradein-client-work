<template>
  <div class="container registrator">
    <h1 class="center">Страница Регистрации</h1>
    <form>
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Логин</label>
        <input
          v-model="Login"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
        <div id="emailHelp" class="form-text">Введите Логин</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Пароль</label>
        <input
          v-model="Password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          required
        />
        <div id="passwordHelp" class="form-text">Введите Пароль</div>
      </div>

      <label for="exampleInputEmail1" class="form-label">Роль</label>
      <select
        v-model="Role"
        class="mb-4 form-select"
        aria-label="Default select example"
        required
      >
        <option>Выберите Роль</option>
        <option value="1">Администратор</option>
        <option value="2">Оператор</option>
      </select>
      <div class="Retail" v-if="Role == 2">
        <label for="exampleInputEmail1" class="form-label"
          >Где работает сотрудник</label
        >
        <select
          v-model="Retail"
          class="mb-4 form-select"
          aria-label="Default select example"
          required
        >
          <option
            v-for="(retail, key) in retails"
            v-bind:key="key"
            :value="retail._id"
          >
            {{ retail.Brand }} {{ retail.Code }} {{ retail.Title }}
          </option>
        </select>
      </div>

      <button v-on:click="registrator()" class="btn btn-primary">
        Регистрация
      </button>
    </form>
    <Successful v-bind:text="Successful" v-if="Successful" />
    <br />
    <Error v-bind:text="ErrorMSG" v-if="ErrorMSG" />
  </div>
</template>
<script>
// @ is an alias to /src
import { config } from "../api/constant";
import Axios from "axios";
import Successful from "../components/Successful";
import Error from "../components/Error";

export default {
  name: "Registrator",
  data() {
    return {
      Login: "",
      Password: "",
      Role: "Выберите Роль",
      Successful: "",
      ErrorMSG: "",
      Retail: "",
    };
  },
  computed: {
    retails: function () {
      return this.$store.getters.getRetails;
    },
  },
  mounted() {
    this.$store.dispatch("getRetails");
  },
  methods: {
    registrator: function () {
      Axios({
        method: "post",
        url: `${config.url}/registrator`,
        data: {
          Login: this.Login,
          Password: this.Password,
          Role: this.Role,
          Retail: this.Retail,
        },
      })
        .then((res) => {
          if (res.status == 201) {
            this.ErrorMSG = false;
            this.Login = "";
            this.Password = "";
            this.Role = "";
            this.Retail = "";
            this.Successful = res.data;
            setTimeout(() => {
              this.Successful = "";
              this.$router.push("/login");
            }, 2000);
          } else {
            this.ErrorMSG = res.data.message;
            // setTimeout(() => {
            //   this.ErrorMSG = "";
            // }, 5000);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  components: {
    Successful,
    Error,
  },
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 40px;
  margin-bottom: 40px;
}
</style>
