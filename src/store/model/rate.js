import axios from "axios";
import { config } from "../../api/constant";
export default {
  state: {
    ResultRate: "",
    ErrRate: "",
  },
  getters: {
    getResultRate: (state) => state.ResultRate,
  },
  actions: {
    RateDevice({ commit }) {
      new Promise((resolve) => {
        const {
          IMEI,
          Color,
          CodeNomenclature,
          TitlePhone,
          TitleRetail,
          CodeRetail,
          dPower,
          dFaceUnLocked,
          dScanToch,
          dAccount,
          dScreenFlashing,
          dScreenTouch,
          dScreenProtection,
          dScreenDefect,
          dScreenDefects,
          dBodyDefects,
          dButtonWork,
          dBattery,
          dCharging,
          dWifi,
          dBluetooth,
          dCam,
          dCellular,
          dMultimediaDynamic,
          dVoiceDynamic,
        } = this.state.storageRequest.FormApllication;
        const { retail } = this.state.retails;
        const { login, user, idRetail } = this.state.users;
        axios({
          method: "post",
          url: `${config.url}/rate/ratedevice`,
          mode: "no-cors",
          data: {
            user: {
              login: login,
              user: user,
              idRetail: idRetail,
              retail: retail,
            },
            info: {
              IMEI: IMEI,
              CodeNomenclature: CodeNomenclature,
              TitlePhone: TitlePhone,
              TitleRetail: TitleRetail,
              CodeRetail: CodeRetail,
              Color:Color
            },
            resultRate: {
              dPower: dPower,
              dFaceUnLocked: dFaceUnLocked,
              dScanToch: dScanToch,
              dAccount: dAccount,
              dScreenFlashing: dScreenFlashing,
              dScreenTouch: dScreenTouch,
              dScreenProtection: dScreenProtection,
              dScreenDefect: dScreenDefect,
              dScreenDefects: dScreenDefects,
              dBodyDefects: dBodyDefects,
              dButtonWork: dButtonWork,
              dBattery: dBattery,
              dCharging: dCharging,
              dWifi: dWifi,
              dBluetooth: dBluetooth,
              dCam: dCam,
              dCellular: dCellular,
              dMultimediaDynamic: dMultimediaDynamic,
              dVoiceDynamic: dVoiceDynamic,
            },
          },
        })
          .then((res) => {
            if (res.status == 200) {
              commit("ResultRate", { type: "ResultRate", items: res.data });
              commit("editClientInfo", {
                type: "idRequest",
                items: res.data._id,
              });

              if (!localStorage.getItem("idRequest")) {
                this.dispatch("createRequest", res.data);
              } else {
                console.log('localStorage.getItem("idRequest")');
              }
            } else {
              commit("ResultRate", { type: "ErrRate", items: res.data });
            }
          })
          .catch((e) => {
            commit("ResultRate", { type: "ErrRate", items: e });
          });
      });
    },
  },
  mutations: {
    ResultRate(state, { type, items }) {
      state[type] = items;
    },
  },
};
