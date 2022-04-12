export default {
  state: {
    FormApllication: {
      IMEI: "",
      Color: "",
      CodeNomenclature: "",
      Impress: "",
      Facelock: "",
      TitlePhone: "",
      TitleRetail: "",
      CodeRetail: localStorage.getItem("idRetail") || "",
      dPower: "",
      dFaceUnLocked: "",
      dScanToch: "",
      dAccount: "",
      dScreenFlashing: "",
      dScreenTouch: "",
      dScreenProtection: "",
      dScreenDefect: "",
      dScreenDefects: "",
      dBodyDefects: "",
      dButtonWork: "",
      dBattery: "",
      dCharging: "",
      dWifi: "",
      dBluetooth: "",
      dCam: "",
      dCellular: "",
      dMultimediaDynamic: "",
      dVoiceDynamic: "",
    },
  },
  getters: {
    getTitleRetail: (state) => state.FormApllication.TitleRetail,
    Impress: (state) => state.FormApllication.Impress,
    Facelock: (state) => state.FormApllication.Facelock,
    getFormApllication: (state) => state.FormApllication,
    getCodeNomenclature: (state) => state.FormApllication.CodeNomenclature,
  },
  actions: {
    setInfoDeviceInfoStorageRequest({ commit }, info) {
      commit("setInfoRequest", { type: "IMEI", items: info.IMEI });
      commit("setInfoRequest", { type: "Color", items: info.Color });
      commit("setInfoRequest", { type: "Impress", items: info.Phone.Impress });
      commit("setInfoRequest", {
        type: "Facelock",
        items: info.Phone.Facelock,
      });
      commit("setInfoRequest", {
        type: "CodeNomenclature",
        items: info.Phone.Code,
      });
      commit("setInfoRequest", { type: "TitlePhone", items: info.Phone.Model });
      commit("setInfoRequest", { type: "TitlePhone", items: info.Phone.Model });
      commit("setInfoRequest", {
        type: "TitleRetail",
        items: info.Retail.Title,
      });
      commit("setInfoRequest", {
        type: "CodeRetail",
        items: info.Retail.Value,
      });
    },
    setInitialEstimateInfoStorageRequest({ commit }, info) {
      console.log(info);
      commit("setInfoRequest", { type: "dPower", items: info.dPower });
      commit("setInfoRequest", {
        type: "dFaceUnLocked",
        items: info.dFaceUnLocked,
      });
      commit("setInfoRequest", {
        type: "dScanToch",
        items: info.dScanToch,
      });
      commit("setInfoRequest", {
        type: "dAccount",
        items: info.dAccount,
      });
    },
    setVisualEstimateInfoStorageRequest({ commit }, info) {
      console.log(info);
      commit("setInfoRequest", {
        type: "dScreenFlashing",
        items: info.dScreenFlashing,
      });
      commit("setInfoRequest", {
        type: "dScreenTouch",
        items: info.dScreenTouch,
      });
      commit("setInfoRequest", {
        type: "dScreenProtection",
        items: info.dScreenProtection,
      });
      commit("setInfoRequest", {
        type: "dScreenDefect",
        items: info.dScreenDefect,
      });
      commit("setInfoRequest", {
        type: "dScreenDefects",
        items: info.dScreenDefects,
      });
      commit("setInfoRequest", {
        type: "dBodyDefects",
        items: info.dBodyDefects,
      });
      commit("setInfoRequest", {
        type: "dButtonWork",
        items: info.dButtonWork,
      });
    },
    setFunctionDeviceInfoStorageRequest({ commit }, info) {
      commit("setInfoRequest", {
        type: "dBattery",
        items: info.dBattery,
      });
      commit("setInfoRequest", {
        type: "dCharging",
        items: info.dCharging,
      });
      commit("setInfoRequest", {
        type: "dWifi",
        items: info.dWifi,
      });
      commit("setInfoRequest", {
        type: "dBluetooth",
        items: info.dBluetooth,
      });
      commit("setInfoRequest", {
        type: "dCam",
        items: info.dCam,
      });
      commit("setInfoRequest", {
        type: "dCellular",
        items: info.dCellular,
      });
      commit("setInfoRequest", {
        type: "dMultimediaDynamic",
        items: info.dMultimediaDynamic,
      });
      commit("setInfoRequest", {
        type: "dVoiceDynamic",
        items: info.dVoiceDynamic,
      });
    },
  },
  mutations: {
    setInfoRequest(state, { type, items }) {
      state.FormApllication[type] = items;
    },
  },
};
