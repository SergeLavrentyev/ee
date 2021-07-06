<template>
  <div class="cart-popup__footer">
    <div class="cart-summary">
      <span>Итого:</span>
      <div class="cart-summary__value">
        {{ totalSum.toLocaleString() }} ₽
      </div>
    </div>
    <hr />
    <div class="cart-popup__footer-buttons">
      <a id="cart-popup__checkout" href="#" class="button"
        >Оформить заказ</a
      >
      <router-link
        to="/cart"
        id="cart-popup__to-cart"
        class="button button__primary"
        >В корзину
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'CartFooter',
  computed: {
     ...mapGetters(['cart']),
    totalSum() {
      return this.cart.reduce((acc, item) => {
        return (acc += Number(item.price));
      }, 0);
    },
  }
};
</script>

<style></style>
