<template>
  <main>
    {{defaultText}}を編集しますか？
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
      id :null,
      defaultText: '',
      editedText: ''
    }
  },
  methods: {
    editTodo() {
      store.commit('editTodo',{
        text: this.editedText,
        id: this.id}
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
