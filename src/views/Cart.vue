<template>
  <div class="page cart-page">
    <div class="container">
      <h1 class="page__main__title">Корзина</h1>

      <div class="cart-group-wrapper">
        <CartHeader />
        <div class="cart-group">
          <CartItem :cart="cart" />
          <!-- cart-product -->
        </div>
        <!-- cart-group -->
      </div>
      <!-- /.cart-group-wrapper -->

      <div class="cart-page__total-amount">
        <div class="cart-summary">
          <span>Итого:</span>
          <div class="cart-summary__value">{{totalSum.toLocaleString()}} ₽</div>
        </div>
        <hr />
        <div class="cart__footer-buttons right-align">
          <a id="checkout" href="#" class="button">Оформить заказ</a>
        </div>
      </div>
      <!-- cart-page__total-amount -->
    </div>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';
import CartHeader from '../components/CartHeader';
import { mapGetters } from 'vuex';
export default {
  name: 'Cart',
  components: {
    CartItem,
    CartHeader,
  },
  computed: {
    ...mapGetters(['cart']),
    totalSum() {
      return this.cart.reduce((acc, item) => {
        return (acc += Number(item.price));
      }, 0);
    },
    
  },
};
</script>

<style></style>
