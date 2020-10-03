/* Services: connexion to json-server */

import axios from "axios";

//let baseUrl = "https://my-json-server.typicode.com/raigyo/vue-shop-json-server";
let baseUrl = "http://localhost:3000";

export default {
  getProducts() {
    return axios.get(`${baseUrl}/products`);
  },
  createProduct(book) {
    return axios.post(`${baseUrl}/products`, book);
  }
};
