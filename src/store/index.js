import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    kategori: [],
    provinsi: [],
    kecamatan: [],
    kelurahan: [],
    profile: [],
    kabupaten: [],
    rayons: [],
    asosiasi: [],
    parentid: [],
  },
  mutations: {
    GET_KATEGORI(state, data) {
      state.kategori = data.kategori;
    },
    GET_PROVINSI(state, data) {
      state.provinsi = data.provinsi;
    },
    GET_KABUPATEN(state, data) {
      state.kabupaten = data.provinsi;
    },
    GET_KECAMATAN(state, data) {
      state.kecamatan = data.kecamatan;
    },
    GET_KELURAHAN(state, data) {
      state.kelurahan = data.kelurahan;
    },
    GET_PROFILE_DATA(state, data) {
      state.profile = data.profile;
    },
    GET_RAYONID(state, data) {
      state.rayons = data.rayon;
    },
    GET_RAYONSS(state, data) {
      state.rayons = data.data_rayon;
    },
    GET_ASOSIASI(state, data) {
      state.asosiasi = data.asosiasi;
    },
    GET_PARENTID(state, data) {
      state.parentid = data;
    },
  },
  actions: {
    getApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.get(`${process.env.VUE_APP_API}${proto.url}`, proto.headers)
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    postApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.post(`https://octomoda.tech/api/${proto.url}`, proto.data, proto.headers)
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    patchApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.patch(`https://octomoda.tech/api/${proto.url}`, proto.data)
          .then((res) => {
            commit(proto.mutation, res.data);
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
    // eslint-disable-next-line no-unused-vars
    deleteApi({ commit }, proto) {
      return new Promise((resolve, reject) => {
        Axios.delete(`https://octomoda.tech/api/${proto.url}`, proto.data)
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            reject(new Error(err));
          });
      });
    },
  },
  modules: {},
});
