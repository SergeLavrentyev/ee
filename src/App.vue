<template>
  <TheHeader />
  <router-view/>
  <NavMenu />
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import NavMenu from './components/NavMenu.vue'
export default {
  components: {
    TheHeader,
    NavMenu
  }
}
</script>

<style lang="scss">

</style>
