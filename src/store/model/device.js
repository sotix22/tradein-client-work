import axios from "axios";
import {config} from "../../api/constant.js"
export default {
    state: {
        typeDevice: '',
        err: ''
    },
    getters: {
        getTypeDevice: state => state.typeDevice,
        getErr: state => state.err,
    },
    actions: {

        getTypeDevice({ commit }) {
            axios({
                method: "GET",
                mode: "no-cors",
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
                url: `${config.url}/device/getTypeDevice`
            })
                .then(res => {
                    if (res.status === 201) {

                        commit('dataTypeDevice', { type: "typeDevice", items: res.data })
                    }
                    else {
                        commit('dataTypeDeviceErr', { type: "err", items: res.data })
                    }
                })
                .catch(e => {
                    commit('dataTypeDeviceErr', { type: "err", items: res.data })
                })
        },

    },
    mutations: {
        dataTypeDevice(state, { type, items }) {
            state[type] = items
        },
        dataTypeDeviceErr(state, { type, items }) {
            state[type] = items
        }
    }
}