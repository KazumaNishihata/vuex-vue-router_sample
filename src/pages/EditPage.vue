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
import router from '../router'

export default {
  data () {
    return {
      editedText: ''
    }
  },
  computed: {
    todo() {
      return this.$store.getters.todo(this.$store.state.route.params.id)
    }
  },
  methods: {
    editTodo() {
      this.$store.commit('editTodo',{
        text: this.editedText,
        id: this.$store.state.route.params.id}
      )
      this.back()
    },
    back() {
      router.push('/')
    }
  },
  created(){
    this.id = this.$route.params.id-0;
    this.defaultText =  this.editedText = this.$store.state.todos.filter( (v,i) => i===this.id).toString()
  }
}
</script>

<style>

</style>
