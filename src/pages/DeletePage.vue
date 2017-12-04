<template>
  <main>
    「{{todo}}」を削除しますか？
    <form>
      <input type="button" value="削除" @click="deleteTodo">
    </form>
     <input type="button" value="戻る" @click="back">
  </main>
</template>

<script>
import router from '../router'

export default {
  computed: {
    todo() {
      return this.$store.getters.todo(this.$store.state.route.params.id)
    }
  },
  methods: {
    deleteTodo() {
      this.$store.commit('deleteTodo',this.$store.state.route.params.id)
      this.back()
    },
    back() {
      router.push('/')
    }
  }
}
</script>

<style>

</style>
