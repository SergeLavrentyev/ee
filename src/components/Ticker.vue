<template>
  <div class="exchange">
    <div class="container">
      <div class="exchange__body">
        <div class="exchange__marquee">
          <div class="exchange-line" v-for="i in 3" :key="i">
            <span class="exchange__title">
              Биржевые индексы:
            </span>
            <ul class="exchange__list">
              <li
                class="exchange__item"
                v-for="(t, tIndex) in tickers"
                :key="tIndex"
              >
                {{ tickerNames[t.acronim] }}
                <span class="exchange__val" id="exchange-gold-1">{{
                  t.buy
                }}</span>
                <span
                  class="exchange__item-arrow exchange__item-arrow-gold"
                  id="exchange-gold-arrow-1"
                ></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'Ticker',
  data: () => ({
    tickerNames: {
      USD: 'Доллар',
      EUR: 'Евро',
      XAU: 'Золото',
      PL: 'Платинф',
      XAG: 'Серебро',
    },
  }),
  mounted() {
    this.fetchTickers();
  },
  methods: {
    ...mapActions(['fetchTickers']),
  },
  computed: {
    ...mapGetters({
      tickers: 'tickers',
    }),
  },
};
</script>

<style></style>
