<template>
  <div class="fix-menu-wrap">
    <div class="fix-menu">
      <div class="fix-menu__item">
        <router-link to="/catalog" class="fix-menu__link fix-menu__link-catalog slide-nav-toggle" aria-controls="slide-nav"
          aria-expanded="false">
          <span class="fix-menu__title">Каталог</span>
        </router-link>
      </div>
      <div class="fix-menu__item">
        <router-link to="/login" class="fix-menu__link fix-menu__link-charts">
          <span class="fix-menu__title">Login</span>
        </router-link>
      </div>
      <div class="fix-menu__item">
        <a href="/" class="fix-menu__link fix-menu__link-home">
          <span class="fix-menu__title">Главная</span>
        </a>
      </div>
      <div class="fix-menu__item fix-menu__item-cart-popup">
        <router-link to="/cart" id="fixcartlink" class="fix-menu__link fix-menu__link-cart">
          <span class="fix-menu__title">Корзина</span>
          <span class="cart-qty">{{ cart.length || 0 }} </span>
        </router-link>
      </div>
      <div class="fix-menu__item only-mobile">
        <router-link to="/profile" class="fix-menu__link fix-menu__link-account">
          <span class="fix-menu__title">Профиль</span>
        </router-link>
      </div>
      <div class="fix-menu__item not-mobile">
        <router-link to="/register" class="fix-menu__link fix-menu__link-wishlist">
          <span class="fix-menu__title">Регистрация</span>
          <span class="wishlist-qty">3</span>
        </router-link>
      </div>
    </div>
    <CartPopUp />
  </div>
</template>

<script>
import CartPopUp from './CartPopUp.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'NavMenu',
  components: {
    CartPopUp
  },
  computed: {
    ...mapGetters(['cart'])
  },
  methods: {
    deleteAll() {
      console.log('cleared')
    }
  }
}
</script>

<style>

</style>