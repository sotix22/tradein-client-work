import axios from "axios";
import { config } from "../../api/constant";
export default {
  state: {
    phones: [],
    loading: true,
    err: "",
  },
  getters: {
    getPhones: (state) => {
      let phonesGeter = [];
      if (state.phones.length > 0) {
        phonesGeter = state.phones.filter((el) => {
          if (el.Price) {
            if (el.Status) return el;
          }
        });
        return phonesGeter;
      } else {
        return phonesGeter;
      }
    },
    getLoading: (state) => {
      return state.loading;
    },
    getErrorPhones: (state) => state.err,
  },
  actions: {
    SortPhone({ commit }, option) {
      const { Key } = option;
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/phone/getphones`,
          data: {
            key: Key,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              {
                commit("dataPhones", { type: "phones", items: res.data });
              }
            } else {
              commit("dataPhonesErr", { type: "err", items: res.data });
            }
          })
          .catch((e) => {
            commit("dataPhonesErr", { type: "err", items: res.data });
          });
      });
    },
    SearchPrice({ commit }, value) {
      commit("dataPhones", { type: "loading", items: true });
      axios({
        method: "POST",
        mode: "no-cors",
        data: {
          name: value,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/phone/search`,
      })
        .then((res) => {
          commit("dataPhones", { type: "loading", items: false });
          if (res.status === 201) {
            commit("dataPhones", { type: "phones", items: res.data });
          } else {
            commit("dataPhonesErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataPhonesErr", { type: "err", items: res.data });
        });
    },
    getPhonesByType({ commit }, { id }) {
      commit("dataPhones", { type: "loading", items: true });
      axios({
        method: "POST",
        mode: "no-cors",
        data: {
          id: id,
        },
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/phone/getphonesbytype`,
      })
        .then((res) => {
          commit("dataPhones", { type: "loading", items: false });
          if (res.status === 201) {
            commit("dataPhones", { type: "phones", items: res.data });
          } else {
            commit("dataPhonesErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataPhonesErr", { type: "err", items: res.data });
        });
    },
    getPhones({ commit }) {
      commit("dataPhones", { type: "loading", items: true });
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/phone/getphones`,
      })
        .then((res) => {
          commit("dataPhones", { type: "loading", items: false });
          if (res.status === 201) {
            commit("dataPhones", { type: "phones", items: res.data });
          } else {
            commit("dataPhonesErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataPhonesErr", { type: "err", items: res.data });
        });
    },
  },
  mutations: {
    dataPhones(state, { type, items }) {
      state[type] = items;
    },
    dataPhonesErr(state, { type, items }) {
      state[type] = items;
    },
  },
};
