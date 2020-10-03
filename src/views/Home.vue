<template>
  <div class="home">
    <h1>Book shop</h1>
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src

import Products from "@/views/Products";
export default {
  name: "Home",
  components: {
    Products
  }
};
</script>
