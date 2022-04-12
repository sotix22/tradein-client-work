import axios from "axios";
import { config } from "../../api/constant";
export default {
  state: {
    token: localStorage.getItem("token") || "",
    login: localStorage.getItem("login") || "",
    status: "",
    user: localStorage.getItem("user") || "",
    idRetail: localStorage.getItem("idRetail") || "",
    msg: "",
    err: "",
    viewSidebar: false,
  },
  getters: {
    // isAuthenticated: state => !!state.token,
    getToken: (state) => state.token,
    getLogin: (state) => state.login,
    getUserIdRetail: (state) => state.idRetail,
    authStatus: (state) => state.status,
    getUsers: (state) => state.user,
    getMSG: (state) => state.msg,
    getErrLogin: (state) => state.err,
    getViewSidebar: (state) => state.viewSidebar,
  },
  actions: {
    exit({ commit }) {
      commit("exit", { type: "viewSidebar" });
    },
    view({ commit }) {
      commit("view", { type: "viewSidebar" });
    },
    login({ commit }, { Login, Password }) {
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/login`,
          data: {
            Password: Password,
          },
        })
          .then((res) => {
            console.log(res.status);
            if (res.status == 201) {
              console.log(res.data);
              localStorage.setItem("token", res.data.token);
              localStorage.setItem("login", res.data.user.Login);
              localStorage.setItem("user", JSON.stringify(res.data.user));
              localStorage.setItem("idRetail", res.data.user.Retail);

              var token = res.data.token;

              commit("auth_success", { type: "token", items: res.data.token });
              commit("auth_success", { type: "user", items: res.data.user });
              commit("auth_success", { type: "msg", items: res.data.msg });
              commit("auth_success", {
                type: "login",
                items: res.data.user.Login,
              });
              commit("auth_success", {
                type: "idRetail",
                items: res.data.user.Retail,
              });
              resolve(res.data);
            } else if (res.status == 200) {
              reject(res.data);
              commit("auth_error", { type: "err", items: res.data });
              setTimeout(() => {
                commit("auth_error", { type: "err", items: "" });
              }, 3000);
              localStorage.removeItem("token");
            }
          })
          .catch((err) => {
            reject(err);
            commit("auth_error", err);
            setTimeout(() => {
              commit("auth_error", { type: "err", items: "" });
            }, 3000);
            localStorage.removeItem("token");
          });
      });
    },
    logout({ commit }) {
      localStorage.clear();
      commit("exit", { type: "viewSidebar" });
      commit("auth_logout");
    },
  },
  mutations: {
    view(state, { type, items }) {
      state[type] = true;
    },
    exit(state, { type, items }) {
      state[type] = false;
    },
    auth_success(state, { type, items }) {
      state[type] = items;
    },
    auth_logout(state) {
      (state.token = ""),
        (state.user = ""),
        (state.login = ""),
        (state.Requests = "");
    },
    auth_error(state, { type, items }) {
      state[type] = items;
    },
  },
  modules: {},
};
