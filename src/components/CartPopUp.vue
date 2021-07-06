<template>
  <div class="cart-popup">
    <div class="cart-group-wrapper">
      <CartHeader />
      <hr />
      <div class="cart-group">
        <CartItem :cart="cart"/>
      </div>
    </div>
    <!-- /.cart-group-wrapper -->
    <CartFooter />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CartItem from './CartItem.vue'
import CartHeader from './CartHeader.vue'
import CartFooter from './CartFooter.vue'
export default {
  name: 'CartPopUp',
  components: {
    CartItem,
    CartHeader,
    CartFooter
  },
  computed: {
   ...mapGetters(['cart'])
  },
};
</script>

<style></style>
