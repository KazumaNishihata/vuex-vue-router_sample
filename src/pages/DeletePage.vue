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
import store from '../vuex/store'
import router from '../router'

export default {
  computed: {
    todo(){
      return store.state.todos.filter( (v,i) => i===store.state.route.params.id-0).toString()
    }
  },
  methods: {
    deleteTodo() {
      store.commit('deleteTodo',store.state.route.params.id)
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
