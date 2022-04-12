import axios from "axios";
import { config } from "../../api/constant";
export default {
  state: {
    Requests: "loading",
    Request: "",
    Comment: "Не устроила цена",
    err: "",
    idRequest: localStorage.getItem("idRequest") || "",
    Client: {
      deliteAccount: localStorage.getItem("deliteAccount") || false,
      resetConfig: localStorage.getItem("resetConfig") || false,
      firstName: localStorage.getItem("firstName") || "",
      lastName: localStorage.getItem("lastName") || "",
      secondName: localStorage.getItem("secondName") || "",
      phone: localStorage.getItem("phone") || "",
      document: "1",
      seriesDocument: localStorage.getItem("seriesDocument") || "",
      numberDocument: localStorage.getItem("numberDocument") || "",
      dateDocument: localStorage.getItem("dateDocument") || "",
      whoIssued: localStorage.getItem("whoIssued") || "",
      address: localStorage.getItem("address") || "",
    },
  },
  getters: {
    getRang: (state) => {
      switch (state.Request.RateRang) {
        case "000000002":
          return "A"
        case "000000003":
          //Инструкции, соответствующие valuez
          return "B"
        case "000000004":
          return "C"
        case "000000005":
          return "D"
        default:
          return "Не известно";
      }
    },
    getRequests: (state) => state.Requests,
    getRequest: (state) => state.Request,
    getClient: (state) => state.Client,
    getErrorRequest: (state) => state.err,
    getStatusDeliteAccount: (state) => state.Client.deliteAccount,
    getStatusResetConfig: (state) => state.Client.resetConfig,
    getFirstName: (state) => state.Client.firstName,
    getLastName: (state) => state.Client.lastName,
    getSecondName: (state) => state.Client.secondName,
    getPhone: (state) => state.Client.phone,
    getDocument: (state) => state.Client.document,
    getSeriesDocument: (state) => state.Client.seriesDocument,
    getNumberDocument: (state) => state.Client.numberDocument,
    getDateDocument: (state) => state.Client.dateDocument,
    getWhoIssued: (state) => state.Client.whoIssued,
    getAddress: (state) => state.Client.address,
  },
  actions: {
    saveRequestLocalStorage({ commit }) {
      for (let key in this.state.requests.Client) {
        localStorage.setItem(key, this.state.requests.Client[key])
      }
    },
    SkipRequest({ commit }, Skip) {
      let id = localStorage.getItem("idRetail");
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/getrequestsbyretail`,
          data: {
            id: id,
            skip: Skip,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              {
                commit("dataRequests", { type: "Requests", items: res.data });
              }
            } else {
              commit("dataRequestsErr", { type: "err", items: res.data });
            }
          })
          .catch((e) => {
            commit("dataRequestsErr", { type: "err", items: res.data });
          });
      });
    },
    getSortRequest({ commit }, option) {
      let id = localStorage.getItem("idRetail");
      const { Key, Skip } = option;
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/getrequestsbyretail`,
          data: {
            id: id,
            key: Key,
            skip: Skip,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              {
                commit("dataRequests", { type: "Requests", items: res.data });
              }
            } else {
              commit("dataRequestsErr", { type: "err", items: res.data });
            }
          })
          .catch((e) => {
            commit("dataRequestsErr", { type: "err", items: res.data });
          });
      });
    },
    getDocumentSale({ commit }) {
      const { Request } = this.state.requests;
      const { Client } = this.state.requests;
      new Promise((resolve, reject) => {
        axios({
          method: "post",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/docs`,
          data: {
            Request: Request,
            Client: Client,
          },
        })
          .then((res) => {
            let url = `${config.url}` + "/" + res.data;
            window.open(url, "_blank");
            resolve(res);
          })
          .catch((e) => {
            reject(e);
          });
      });
    },
    RequestPending({ commit }) {
      const { idRetail } = this.state.users;
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/request/statuspending`,
        data: {
          id: idRetail,
        },
      }).then((res) => {
        if (res.status == 200) {
          console.log(res.data)
          localStorage.setItem("idRequest", res.data);
          commit("dataRequests", { type: "idRequest", items: res.data });
        } else if (res.status == 204) {
          localStorage.removeItem("idRequest");
          commit("dataRequests", { type: "idRequest", items: "" });
        }
      });
    },
    RequestFalse({ commit }) {
      let { Comment, idRequest } = this.state.requests;
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/false`,
          data: {
            id: idRequest,
            Comment: Comment,
          },
        }).then((res) => {
          if (res.status == 201) {
            localStorage.removeItem("idRequest");
            for (let key in this.state.requests.Client) {
              localStorage.removeItem(key)
            }
            commit("dataRequests", { type: "idRequest", items: "" });

            commit("dataRequests", { type: "Request", items: "" });
            for (var key in this.state.requests.Client) {
              if (key != "deliteAccount" || key != "resetConfig") {
                commit("editClientInfo", { type: key, items: "" });
              } else {
                commit("editClientInfo", { type: key, items: true });
              }
            }
            resolve(res);
          }
        });
      });
    },
    RequestTrue({ commit }) {
      return new Promise((resolve, reject) => {
        let { Client, idRequest } = this.state.requests;
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/finish`,
          data: {
            id: idRequest,
            Client: Client,
          },
        }).then((res) => {
          if (res.status == 201) {
            localStorage.removeItem("idRequest");
            for (let key in this.state.requests.Client) {
              localStorage.removeItem(key)
            }
            commit("dataRequests", { type: "idRequest", items: "" });

            commit("dataRequests", { type: "Request", items: "" });
            for (var key in this.state.requests.Client) {
              if (key != "deliteAccount" || key != "resetConfig") {
                commit("editClientInfo", { type: key, items: "" });
              } else {
                commit("editClientInfo", { type: key, items: true });
              }
            }
            resolve(res);
          }
        });
      });
    },
    editClientInfo({ commit }, option) {
      commit("editClientInfo", { type: option.type, items: option.value });
    },
    createRequest({ commit }, data) {
      return new Promise((resolve, reject) => {
        const { user } = this.state.users;
        let idFace;
        console.log(typeof user);
        if (typeof user == "string") {
          idFace = JSON.parse(user).IdFace;
        } else {
          idFace = user.IdFace;
        }
        const {
          IMEI,
          Code,
          Color,
          Model,
          Price,
          Login,
          Retail,
          CodeRetail,
          Rate,
          RateRang,
        } = this.state.rate.ResultRate;
        if (!this.state.rate.ResultRate) {
          console.log(123, data);
        }
        console.log(this.state.rate.ResultRate);

        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/create`,
          data: {
            IMEI: IMEI,
            CodeNumenclature: Code,
            Model: Model,
            Price: Price,
            login: Login,
            TitleRetail: Retail,
            idFace: idFace,
            idRetail: CodeRetail || localStorage.getItem("idRetail"),
            Rate: Rate,
            RateRang: RateRang,
            Color: Color,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              localStorage.setItem("idRequest", res.data._id);
              commit("dataRequests", {
                type: "idRequest",
                items: res.data._id,
              });

              resolve(res.data);
            } else {
              resolve(res.data);
            }
          })
          .catch((e) => {
            commit("dataRequestsErr", { type: "err", items: e });
            reject(e);
          });
      });
    },
    getRequestsByIniciator({ commit }, { Iniciator }) {
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/request/getrequestsbyini`,
        data: {
          Iniciator: Iniciator,
        },
      })
        .then((res) => {
          if (res.status === 201) {
            commit("dataRequests", { type: "Requests", items: res.data });
          } else {
            commit("dataRequestsErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataRequestsErr", { type: "err", items: res.data });
        });
    },
    getRequest({ commit }, id) {
      if (!id) {
        id = this.state.requests.idRequest;
      }
      return new Promise((resolve, reject) => {
        axios({
          method: "POST",
          mode: "no-cors",
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
          url: `${config.url}/request/getrequestsbyid`,
          data: {
            id: id,
          },
        })
          .then((res) => {
            if (res.status === 201) {
              resolve(res.data);
              commit("dataRequests", { type: "Request", items: res.data });
            } else {
              reject(res.data);
              commit("dataRequestsErr", { type: "err", items: res.data });
            }
          })
          .catch((e) => {
            reject(e);
            commit("dataRequestsErr", { type: "err", items: e });
          });
      });
    },
    getRequestsByRetail({ commit }) {
      let id = localStorage.getItem("idRetail");
      axios({
        method: "POST",
        mode: "no-cors",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        url: `${config.url}/request/getrequestsbyretail`,
        data: {
          id: id,
        },
      })
        .then((res) => {
          if (res.status === 201) {
            {
              commit("dataRequests", { type: "Requests", items: res.data });
            }
          } else {
            commit("dataRequestsErr", { type: "err", items: res.data });
          }
        })
        .catch((e) => {
          commit("dataRequestsErr", { type: "err", items: res.data });
        });
    },
  },
  mutations: {
    logout({ commit }) {
      commit("auth_logout");
    },
    dataRequests(state, { type, items }) {
      state[type] = items;
    },
    dataRequestsErr(state, { type, items }) {
      state[type] = items;
    },
    auth_logout(state) {
      state.Requests = "";
    },
    editClientInfo(state, { type, items }) {
      state.Client[type] = items;
    },
  },
};
