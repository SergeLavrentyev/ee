<template>
  <div class="cart-product" v-for="(p, pIndex) in cart" :key="pIndex">
    <div class="cart-product__img-name">
      <div class="cart-product__img-wrapper">
        <img
          src="https://goldconnect.online/images/coins/nugget-kangaroo-gold-coin-1.2oz_2021_1.png"
          alt=""
          class="cart-product__img"
        />
      </div>
      <div class="cart-product__name">
        <div class="cart-product__code">54534534</div>
        <a href="" class="cart-product__name-link">
          {{ p.name }}
        </a>
      </div>
    </div>

    <div class="cart-product__info">
      <div class="cart-product__qty">
        <input class="product__qty-number" type="number" v-model="p.quantity" />
      </div>
      <div class="cart-product__price">
        <span>{{ p.price }}</span>
        <span class="font-normal">₽</span>
      </div>
      <div class="cart-product__delete">
        <a
          class="btn-icon btn-icon__delete"
          @click="deleteItem(pIndex)"
        ></a>
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions,} from 'vuex'
export default {
  name: 'CartItem',
  props: {
    cart: {
      type: Array
    }
  },
  data: () => ({}),
  mounted() {
    this.addQuantity()
  },
  computed: {
    totalSum() {
      return this.cart.reduce((acc, item) => {
        return (acc += Number(item.price));
      }, 0);
    },
  },
  methods: {
    ...mapActions(['clear_cart', 'delete_cart_item']),
    deleteAll() {
      this.clear_cart();
    },
    deleteItem(id) {
      this.delete_cart_item(id);
    },
    addQuantity() {
      this.cart.map(item => item.quantity = 1)
    }
  },
};
</script>

<style></style>
