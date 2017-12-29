<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script lang="ts">
import HeaderView from './components/Header.vue'
import FooterView from './components/Footer.vue'

export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style>

</style>
