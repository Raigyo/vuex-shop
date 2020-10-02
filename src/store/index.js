import Vue from "vue";
import Vuex from "vuex";
import productService from "../services/productService";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    }
  },
  actions: {
    getProducts({ commit }) {
      productService
        .getProducts()
        .then(res => {
          commit("GET_PRODUCTS", res.data);
        })
        .catch(err => {
          const error = {
            date: new Date(),
            message: `Failed to retrieve products: ${err.message}`
          };
          commit("CREATE_ERROR", error);
        });
    }
  },
  modules: {}
});
