import { createStore } from "vuex";
import users from "./model/users";
import phones from "./model/phones";
import retails from "./model/retails";
import device from "./model/device";
import requests from "./model/requests";
import storageRequest from "./model/storageRequest";
import rate from "./model/rate";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    users,
    phones,
    retails,
    device,
    requests,
    storageRequest,
    rate,
  },
});
