<template>
  <main>
    {{todo}}を編集しますか？
    <form>
      <input type="text" v-model="editedText">
      <input type="button" value="編集" @click="editTodo">
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
      editedText: ''
    }
  },
  computed: {
    todo(){
      return store.state.todos.filter( (v,i) => i===store.state.route.params.id-0).toString()
    }
  },
  methods: {
    editTodo() {
      store.commit('editTodo',{
        text: this.editedText,
        id: store.state.route.params.id}
      )
      this.back()
    },
    back() {
      router.push('/')
    }
  },
  created(){
    this.id = this.$route.params.id-0;
    this.defaultText =  this.editedText = store.state.todos.filter( (v,i) => i===this.id).toString()
  }
}
</script>

<style>

</style>
