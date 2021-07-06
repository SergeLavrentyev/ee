<template>
  <div class="catalog-item">
    <div class="catalog-item-img-wrap">
      <img
        src="https://goldconnect.online/images/coins/nugget-kangaroo-gold-coin-1.2oz_2021_1.png"
        alt=""
        class="catalog-item-img-1"
      />
      <img
        src="https://goldconnect.online/images/coins/nugget-kangaroo-gold-coin-1.2oz_2021_2.png"
        alt=""
        class="catalog-item-img-2"
      />
    </div>

    <h3 class="catalog-item-name">
      {{ item.name }}
    </h3>
    <span class="catalog-item-weight center">6.06г</span>
    <p class="catalog-item-price">{{ item.price }}</p>

    <div class="buttons">
      <button class="add-to-cart" @click="addToCart(item)">В корзину</button>
      <!-- <button class="button-icon add-to-compare"></button>
                  <button class="button-icon add-to-wishlist"></button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogItem',
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    addToCart(item) {
      this.$emit('add-to-cart', item)
    },
  },
};
</script>

<style></style>
