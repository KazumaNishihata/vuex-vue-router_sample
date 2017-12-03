<template>
  <div id="app">
    <header-view></header-view>
    <router-view></router-view>
    <footer-view></footer-view>
  </div>
</template>

<script>
import HeaderView from './components/Header'
import FooterView from './components/Footer'

export default {
  components: {
    HeaderView,
    FooterView
  }
}
</script>

<style>

</style>
