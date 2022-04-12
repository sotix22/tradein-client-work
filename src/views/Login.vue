<template>
  <div class="container">
    <div class="logo">
      <img :src="Logo" alt="" />
    </div>
    <hr />
    <div class="form">
      <form>
        <!-- <h1>Вход в систему</h1> -->

        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label"
            >Выберите Пароль</label
          >
        </div>
        <div class="mb-3">
          <input
            v-on:keyup.enter="login"
            @input="clearErr"
            v-model="Password"
            placeholder="Password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="d-grid">
          <button type="button" @click="login()" class="btn btn-dark">
            Вход
          </button>
        </div>
      </form>

      <ErrMSG v-if="getErr || Err" v-bind:text="getErr || Err" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Axios from "axios";
import { config } from "../api/constant";
// import Navbar from "@/components/Navbar";
import Successful from "@/components/Successful";
import ErrMSG from "../components/Error";
import Logo from "../assets/sotiks_logo.svg";
export default {
  name: "Login",
  data() {
    return {
      Logo: Logo,
      Login: "",
      Password: "",
      Users: [],
      Err: "",
      RetailLogin: "",
      Retail: this.$store.getters.getUserRetail,
    };
  },
  watch: {
    Password() {
      this.Err = "";
    },
  },
  computed: {
    getUsers() {
      return this.$store.getters.getUsers;
    },
    getErr() {
      return this.$store.getters.getErrLogin;
    },

    getToken() {
      return this.$store.getters.getToken;
    },
    Retails() {
      return this.$store.getters.getRetails;
    },
  },
  // mounted() {
  //   this.syncRetail().then((res) => {
  //     if (res.status == 200) {
  //       this.$store.dispatch("getRetails");
  //     }
  //   });
  // },
  methods: {
    syncRetail() {
      return new Promise((response, reject) => {
        Axios({
          method: "GET",
          url: `${config.url}/sync/syncRetail`,
        }).then((resRetail) => {
          if (resRetail.status == 200) {
            console.log("Синхронизация ретайл прошла успешно!", resRetail);
            this.syncUsers().then((resUser) => {
              console.log("Синхронизация Инициаторов прошла успешно!", resUser);
              response(resUser);
            });
          }
        });
      });
    },
    syncUsers() {
      return new Promise((response, reject) => {
        Axios({
          method: "get",
          url: `${config.url}/sync/syncUsers`,
        })
          .then((res) => {
            console.log(res);
            response(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    login: function () {
      const { Password } = this;
      this.$store
        .dispatch("login", { Password })
        .then((r) => {
          this.$store.dispatch("getUserRetailById", { id: r.user.Retail });

          this.$router.push("/applications/");
        })
        .catch((err) => {
          this.Err = "";
          this.Err = err.response.data;
          console.log(err);
        });
    },
    getUsersRetail(code) {
      this.Login = "";
      Axios({
        method: "post",
        url: `${config.url}/users/getUsersByCodeRetail`,
        data: {
          code: code,
        },
      }).then((res) => {
        if (res.status == 201) {
          if (res.data != "") {
            this.Users = res.data;
            this.Err = "";
          } else {
            this.Users = "";
            this.Err = "На этой точке пользователи не найдены";
          }
        } else {
          this.Users = "";
          this.Err = res.data;
        }
      });
    },
    registrator: function () {
      this.$router.push("/registrator");
    },
  },
  components: { Successful, ErrMSG },
};
</script>
<style lang="scss" scoped>
h1 {
  font-size: 32pt;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
body {
  background-color: #eeeeee;
}
.btn {
  display: grid;
  margin: 5px;
}
.logo {
  height: auto;
  width: 400px;
  margin: auto;
  margin-top: 100px;
  margin-bottom: 25px;
}
.form {
  display: grid;
  justify-content: center;
  max-width: 330px;
  margin: 0 auto;
  text-align: center;
  margin-top: 50px;
}
label {
  font-weight: 700;
}
option {
  font-weight: 500;
}
select {
  margin-bottom: 20px;
}
input {
  margin-top: 20px;
  margin-bottom: 20px;
}
.d-grid {
  display: grid;
  justify-content: center;
}
// hr{box-shadow: 0 0 10px 1px black;}
</style>
