<template>
  <header class="header">
    <Ticker />
    <div class="container header-inner">
      <div class="header-logo">
        <a href="/" class="logo-link">
          <img class="header-logo-img" src="https://dmitriyraspel.github.io/demo_gold_tech/img/GT_Market_logo.png"
            alt="GoldTechMarket-logo">
        </a>
      </div>
      <div class="header-inner-right">
        <ul class="header-links">
          <li class="not-mobile">
            <router-link to="/profile" class="ico-account"></router-link>
          </li>
        </ul>
      </div>
    </div>

  </header>
</template>

<script>
import Ticker from './Ticker.vue'
export default {
  components: {
    Ticker
  }
}
</script>