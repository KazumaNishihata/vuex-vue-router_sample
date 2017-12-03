<template>
  <main>
    「{{text}}」を削除しますか？
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
  data () {
    return {
      id :null,
      text: '',
    }
  },
  methods: {
    deleteTodo() {
      store.commit('deleteTodo',this.id)
      this.back()
    },
    back() {
      router.push('/')
    }
  },
  created(){
    this.id = this.$route.params.id-0;
    this.text =  store.state.todos.filter( (v,i) => i===this.id).toString()
  }
}
</script>

<style>

</style>
