/* Vue to add books */

<template>
  <div>
    <h3>create a new book</h3>
    <ProductForm />
  </div>
</template>

<script>
import ProductForm from "@/components/admin/ProductForm";
export default {
  components: {
    ProductForm
  }
}
</script>
