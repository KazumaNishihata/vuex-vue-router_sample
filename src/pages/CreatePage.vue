<template>
  <main>
    <form>
      <input type="text" v-model="todoText">
      <input type="button" value="追加" @click="addTodo">
    </form>
     <input type="button" value="戻る" @click="back">
  </main>
</template>

<script>
import router from '../router';

export default {
  data () {
    return {
      todoText: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo',this.todoText)
      this.back();
    },
    back() {
      router.push('/')
    }
  }
}
</script>

<style>

</style>
