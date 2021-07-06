<template>
  <div class="cart-group__header">
    <span class="cart-group__title">Товары </span>
    <span class="cart-group__qty">({{ cart.length || 0 }})</span>
    <span class="cart-group__remove-all" @click="deleteAll">Очистить список</span
    >
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'CartHeader',
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    ...mapActions(['clear_cart']),
    deleteAll() {
      this.clear_cart()
    },
  }
};
</script>

<style></style>
