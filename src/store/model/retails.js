import axios from "axios";
import {config} from "../../api/constant"
export default {
  state: {
    retails: [],
    err: "",
    retail: localStorage.getItem("retail") || "",
  },
  getters: {
    getRetails: (state) => state.retails,
    getErrorRetail: (state) => state.err,
    getUserRetail: (state) => {
      if (state.retail) {
        if (typeof state.retail != "string") {
          return state.retail;
        } else {
          return JSON.parse(state.retail);
        }
      }
    },
  },
  actions: {
    getRetails({ commit }) {
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/retail/getretails`,
      })
        .then((res) => {
          if (res.status === 201) {
            commit("dataRetails", { type: "retails", items: res.data });
          } else {
            commit("dataRetailsErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataRetailsErr", { type: "err", items: e });
        });
    },
    getUserRetailById({ commit }, { id }) {
      console.log("Запрашиваем точку");
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        data: {
          id: id,
        },
        url: `${config.url}/retail/getretailbyid`,
      })
        .then((res) => {
          if (res.status === 201) {
            localStorage.setItem("retail", JSON.stringify(res.data));
            console.log(res.data);
            commit("dataRetail", { type: "retail", items: res.data });
          } else {
            commit("dataRetailsErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataRetailsErr", { type: "err", items: e });
        });
    },
  },
  mutations: {
    dataRetails(state, { type, items }) {
      state[type] = items;
    },
    dataRetailsErr(state, { type, items }) {
      state[type] = items;
    },
    dataRetail(state, { type, items }) {
      state[type] = items;
    },
  },
};
