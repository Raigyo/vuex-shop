/* Services: connexion to json-server */

import axios from "axios";

// let baseUrl = "https://my-json-server.typicode.com/raigyo/vue-shop-json-server";
let baseUrl = "http://localhost:3000";

export default {
  getProducts() {
    return axios.get(`${baseUrl}/products`);
  },
  createProduct(book) {
    return axios.post(`${baseUrl}/products`, book);
  },
  addToCart(product) {
    //return axios.post(`${baseUrl}/cart`, product);
    //Promise receive a callback with 2 functions: resolve and reject
    return new Promise(resolve => {
      let cartInLocalstorage = localStorage.getItem("vuex-commerce-cart");
      let cart = {};
      //If local storage doesn't exist: create one
      if (!cartInLocalstorage) {
        product.quantity = 1;
        cart = { products: [product] };
        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      } else {
        // parse the existing local storage
        const products = JSON.parse(localStorage.getItem("vuex-commerce-cart"))
          .products;
        //if same product already in the cart: increment its quantity
        const index = products.findIndex(p => p.id === product.id);
        //if not
        if (index === -1) {
          product.quantity = 1;
          cart = { products: [...products, product] };
        } else {
          //not in cart
          products[index].quantity += 1;
          cart = {
            products: [...products],
          };
        }
        localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
        resolve(cart);
      }
    });
  },
  removeOneFromCart(product) {
    return new Promise(resolve => {
      const products = JSON.parse(localStorage.getItem("vuex-commerce-cart"))
        .products;
      const index = products.findIndex(p => p.id === product.id);
      products[index].quantity -= 1;

      // remove this product from cart if it's new quantity is zero
      if (products[index].quantity === 0) {
        products.splice(index, 1);
      }

      const cart = {
        products: [...products]
      };
      localStorage.setItem("vuex-commerce-cart", JSON.stringify(cart));
      resolve(cart);
    });
  }
};
